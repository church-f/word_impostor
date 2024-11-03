import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SettingsPage from "./component/settings_page/SettingsPage";
import GamePage from "./component/game_page/GamePage";
import allWords from '../public/parole.json'
import { updateAllWords } from "./features/playerSlice";

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(updateAllWords(allWords))
  }, [])

  const gameStarted = useSelector((state) => state.player.gameStarted);
  return <>{gameStarted ? <GamePage /> : <SettingsPage />}</>;
}

export default App;
