import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ImpostorsNamesText from "./ImpostorsNamesText";

export default function CardRole(props) {
  const secretWord = useSelector((state) => state.player.secretWord);
  const impostorKnowImpostors = useSelector(
    (state) => state.player.impostorKnowImpostors
  );

  const [playerIndex, setPlayerIndex] = useState(0);
  const [textToShow, setTextToShow] = useState(props.players[0]);
  const [colorToShow, setColorToShow] = useState("textPrimary");
  const [isImpostor, setIsImpostor] = useState(false)
  //textPrimary, error, info
  const [isShowingName, setIsSowingName] = useState(true);

  const colorMap = {
    textPrimary: "#000",
    error: "#ff3224",
    info: "#24bdff",
  };

  const changeText = () => {
    if (isShowingName) {
      if (props.impostorsName.includes(props.players[playerIndex])) {
        setTextToShow(t("Impostore"));
        setColorToShow("error");
        setIsImpostor(true)
      } else {
        setTextToShow(secretWord);
        setColorToShow("info");
        setIsImpostor(false)
      }
    } else {
      setTextToShow(props.players[playerIndex + 1]);
      if (playerIndex + 1 === props.players.length) {
        props.setEndedNames(true);
      }
      setPlayerIndex((before) => before + 1);
      setColorToShow("textPrimary");
    }
    setIsSowingName(!isShowingName);
  };
  return (
    <>
      <Card
        onClick={() => {
          changeText();
        }}
        sx={{
          width: "75%",
          height: "40%",
          border: `2px solid ${colorMap[colorToShow]}`,
          boxShadow: "0px 0px 30px #707070",
        }}
        style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}
      >
        <CardContent style={{ display: "flex", alignItems: "center", flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
          <Typography variant="h3" color={colorToShow}>
            {textToShow}
          </Typography>

          {impostorKnowImpostors &&
          !isShowingName &&
          props.impostorsName.length > 1 &&
          isImpostor
           ? (
            <ImpostorsNamesText
              impostorsName={props.impostorsName}
              currentName={props.players[playerIndex]}
            />
          ) : (
            ""
          )}
        </CardContent>
      </Card>
    </>
  );
}
