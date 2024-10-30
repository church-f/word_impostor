import { useDispatch } from "react-redux";
import AccordionPlayer from "./AccordionPlayer";
import ImpostorCounter from "./ImpostorCounter";
import Button from "@mui/material/Button";
import {
  decrementTimer,
  incrementTimer,
  newGame,
  updateGameState,
  updateSecretWord,
} from "../features/playerSlice";
import { useSelector } from "react-redux";
import CounterComponent from "./CounterComponent";
import { incremerntImpostor, decrementImpostor } from "../features/playerSlice";
import AccordionCategory from "./AccordionCategory";


export default function SettingsPage(props) {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state) => state.player.selectedWordCategories
  );
  // const getWord = () =>{
  //     let finalList = []
  //     Object.keys(allWords).forEach((category)=>{
  //         if(selectedCategories.includes(category)){
  //             finalList = finalList.concat(allWords[category])
  //         }
  //     })
  //     let randomWord = finalList[Math.floor(Math.random() * finalList.length)]
  //     dispatch(updateSecretWord(randomWord))
  // }
  return (
    <>
    <div style={{display: 'flex', gap: '10px', flexDirection: 'column'}}>

      <AccordionPlayer />
      <CounterComponent 
        title='Impostori'
        counterState='impostorCounter'
        incrementFunction={dispatch(incremerntImpostor)}
        decrementFunction={dispatch(decrementImpostor)}
      />
      <CounterComponent
        title="Timer"
        counterState="timerInMinutes"
        incrementFunction={dispatch(incrementTimer)}
        decrementFunction={dispatch(decrementTimer)}
      />
      <AccordionCategory/>
    </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
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
          Gioca
        </Button>
      </div>
    </>
    // </div>
  );
}
