import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CardRole from "./CardRole";
import { updateImpostorName } from "../features/playerSlice";
import Timer from "./Timer";

export default function GamePage(props) {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.player.playerNames);
  const impostorCounter = useSelector((state) => state.player.impostorCounter);

  const impostorsName = useSelector((state)=>state.player.impostorName)
  const [endedNames, setEndedNames] = useState(false);

//   useEffect(() => {
//     let temp = [];
//     let copyPlayers = [...players];
//     for (var i = 0; i < impostorCounter; i++) {
//       let randomNumber = Math.floor(Math.random() * copyPlayers.length);
//       temp.push(copyPlayers[randomNumber]);
//       copyPlayers.splice(randomNumber, 1);
//     }
//     setImpostorsName(temp);
//     dispatch(updateImpostorName(temp));
//   }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100dvh'
      }}
    >
      {endedNames ? (
        <Timer
          impostorsName={impostorsName}
          setEndedNames={(val) => setEndedNames(val)}
        />
      ) : (
        <CardRole
          setEndedNames={(val) => setEndedNames(val)}
          impostorsName={impostorsName}
          players={players}
        />
      )}
    </div>
  );
}
