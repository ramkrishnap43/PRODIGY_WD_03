import React from "react";
import Gamestate from "./Gamestate";

const Reset = ({ gameState, onReset }) => {
  if (gameState === Gamestate.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
};

export default Reset;
