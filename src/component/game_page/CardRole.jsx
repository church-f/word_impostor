import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TouchAppIcon from '@mui/icons-material/TouchApp';

export default function CardRole(props) {
  const secretWord = useSelector((state) => state.player.secretWord);

  const [playerIndex, setPlayerIndex] = useState(0);
  const [textToShow, setTextToShow] = useState(props.players[0]);
  const [colorToShow, setColorToShow] = useState("textPrimary");
  //textPrimary, error, info
  const [isShowingName, setIsSowingName] = useState(true);

  const colorMap = {
    "textPrimary": "#000",
    "error": "#ff3224",
    "info": "#24bdff"
  }

  const changeText = () => {
    if (isShowingName) {
      if (props.impostorsName.includes(props.players[playerIndex])) {
        setTextToShow("Impostore");
        setColorToShow("error");
      } else {
        setTextToShow(secretWord);
        setColorToShow("info");
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
        sx={{ width: "75%", height: "40%", border: `2px solid ${colorMap[colorToShow]}`, boxShadow: '0px 0px 30px #707070'}}
        style={{ display: "flex", alignItems: "center" }}
      >
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3" color={colorToShow}>
            {textToShow}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
