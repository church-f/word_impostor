import { useDispatch } from "react-redux";
import AccordionPlayer from "./AccordionPlayer";
import Button from "@mui/material/Button";
import {
  decrementTimer,
  incrementTimer,
  newGame,
  updateGameState,
} from "../../features/playerSlice";
import CounterComponent from "../CounterComponent";
import { incremerntImpostor, decrementImpostor } from "../../features/playerSlice";
import AccordionCategory from "./AccordionCategory";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import AdvancedSettings from "./advanced_settings/AdvancedSettings";


export default function SettingsPage(props) {
  const dispatch = useDispatch();
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false)
  return (
    <>
      <div style={{height: '98dvh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>


        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>

          <AccordionPlayer />
          <CounterComponent
            title='Impostori'
            counterState='impostorCounter'
            incrementFunction={()=>{dispatch(incremerntImpostor())}}
            decrementFunction={()=>{dispatch(decrementImpostor())}}
          />
          <CounterComponent
            title="Timer (minuti)"
            counterState="timerInMinutes"
            incrementFunction={()=>{dispatch(incrementTimer())}}
            decrementFunction={()=>{dispatch(decrementTimer())}}
          />
          
          <AccordionCategory />

          <FormControlLabel control={<Switch checked={showAdvancedSettings} 
            onChange={(e)=>{
              setShowAdvancedSettings(e.currentTarget.checked)
            }}
          />} label={t("Mostra impostazioni avanzate")} />

            {showAdvancedSettings ? <AdvancedSettings/> : ''}

        </div>
        <div
          style={{
            // position: "absolute",
            // bottom: 0,
            marginTop: '20px',
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              // getWord()
              dispatch(newGame());
              dispatch(updateGameState(true));
            }}
            variant="contained"
            size="large"
          >
            {t('Gioca')}
          </Button>
        </div>
      </div>
    </>
    // </div>
  );
}
