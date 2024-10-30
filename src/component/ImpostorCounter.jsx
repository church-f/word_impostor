import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { incremerntImpostor, decrementImpostor } from "../features/playerSlice";

export default function ImpostorCounter() {
  const impostorCounter = useSelector((state) => state.player.impostorCounter);
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>Impostori</Typography>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            variant="contained"
            onClick={(e) => {
              dispatch(decrementImpostor());
            }}
          >
            <RemoveIcon color="primary" />
          </IconButton>
          <Typography>{impostorCounter}</Typography>
          <IconButton
            variant="contained"
            onClick={(e) => {
              dispatch(incremerntImpostor());
            }}
          >
            <AddIcon color="primary" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
