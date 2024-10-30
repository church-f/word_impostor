import { Button } from "@mui/material";
import { useState } from "react";
import Countdown from "react-countdown";
import { Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useDispatch } from "react-redux";
import { newGame, updateGameState } from "../features/playerSlice";
import { useSelector } from "react-redux";

export default function Timer(props) {
  const dispatch = useDispatch();
  const timerInMinutes = useSelector((state) => state.player.timerInMinutes);
  const timerInMilli = timerInMinutes * 1000 * 60;

  const renderer = ({ hours, minutes, seconds, completed, api }) => {
    if (completed || api.isStopped()) {
      return (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="h4">Impostori: </Typography>
              <Typography
                variant="h4"
                color="error"
                style={{ whiteSpace: "pre-line" }}
              >
                {props.impostorsName.map((x) => {
                  return <>{`${x}\n`}</>;
                })}
              </Typography>
            </div>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(newGame());
                props.setEndedNames(false);
              }}
            >
              Gioca ancora
            </Button>
            <Button
              onClick={() => {
                dispatch(updateGameState(false));
              }}
            >
              ← vai alle impostazioni
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>

          <AccessAlarmIcon fontSize="large" />
          <Typography variant="h6">
            {minutes}:{seconds > 9 ? seconds : `0${seconds}`}
          </Typography>
          <Button size="large" variant="contained" color="error" onClick={()=>{api.stop()}} >Stop</Button>
        </div>
        </>
      );
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Countdown date={Date.now() + timerInMilli} renderer={renderer} />
      </div>
    </>
  );
}
