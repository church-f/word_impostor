import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { removePlayer, updatePlayers } from "../../features/playerSlice";
import TextField from "@mui/material/TextField";

export default function ItemPlayerList(props) {
  const dispatch = useDispatch();
  const deletePlayer = () => {
    dispatch(removePlayer(props.player));
  };
  const players = useSelector((state) => state.player.playerNames);

  const handleChange = (event) => {
    let newName = event.currentTarget.value;
    let temp = Array.from(players);
    let index = temp.indexOf(props.player);
    temp[index] = newName;
    dispatch(updatePlayers(temp));
  };

  return (
    <>
      <Card>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <Typography>{props.player}</Typography> */}
            <TextField
              id="outlined-basic"
              label={t("Nome giocatore")}
              variant="outlined"
              value={props.player}
              onChange={(event) => {handleChange(event)}}
            />
            <IconButton
              onClick={() => {
                deletePlayer();
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
