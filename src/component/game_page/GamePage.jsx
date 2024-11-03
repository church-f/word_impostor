import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CardRole from "./CardRole";
import Timer from "./Timer";

export default function GamePage(props) {
  const players = useSelector((state) => state.player.playerNames);

  const impostorsName = useSelector((state)=>state.player.impostorName)
  const [endedNames, setEndedNames] = useState(false);


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
