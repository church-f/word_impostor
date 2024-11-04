import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { updateImpostorKnowImpostors } from "../../../features/playerSlice";

export default function KnowImpostor(props) {

    const dispatch = useDispatch()
    const  impostorKnowImpostors = useSelector((state)=>state.player.impostorKnowImpostors)

  return (
    <>
      <Card>
        <CardContent>
          <FormControlLabel
            control={
              <Switch
                checked={impostorKnowImpostors}
                onChange={(e) => {
                 dispatch(updateImpostorKnowImpostors(e.currentTarget.checked))
                }}
              />
            }
            label={t("Gli impostori si conoscono")}
          />
        </CardContent>
      </Card>
    </>
  );
}
