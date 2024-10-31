import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


export default function CounterComponent(props) {
  const counterToShow = useSelector((state) => state.player[props.counterState]);
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent style={{display: 'flex', justifyContent: 'space-between', padding: '12px 16px'}}>
        <Typography style={{display: 'flex', alignItems: 'center'}} >{props.title}</Typography>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            variant="contained"
            onClick={(e) => {
              dispatch(props.decrementFunction);
            }}
          >
            <RemoveIcon color="primary" />
          </IconButton>
          <Typography>{counterToShow}</Typography>
          <IconButton
            variant="contained"
            onClick={(e) => {
              dispatch(props.incrementFunction);
            }}
          >
            <AddIcon color="primary" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
