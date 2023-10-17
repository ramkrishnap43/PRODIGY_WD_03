import React, { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import Gamestate from "./Gamestate";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(box, setStrikeClass,setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const boxValue1 = box[combo[0]];
    const boxValue2 = box[combo[1]];
    const boxValue3 = box[combo[2]];

    if (
      boxValue1 != null &&
      boxValue1 === boxValue2 &&
      boxValue1 === boxValue3
    ) {
      setStrikeClass(strikeClass);
      if(boxValue1 === PLAYER_X){
        setGameState(Gamestate.playerXWins)
      }
      else{
        setGameState(Gamestate.playerOWins)
      }
    }
  }

  const fillAllTheBox = box.every((item) => item != null);
  if(fillAllTheBox){
    setGameState(Gamestate.draw)
  }


}

const TicTacToe = () => {
  const [box, setBox] = useState(Array(9).fill(null));

  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const [strikeClass, setStrikeClass] = useState("");

  const [gameState , setGameState] = useState(Gamestate.inProgress)

  const handleClick = (index) => {
    // console.log(index)

    if (box[index] !== null) {
      return;
    }

    const newBox = [...box];
    newBox[index] = playerTurn;
    setBox(newBox);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner(box, setStrikeClass,setGameState);
  }, [box]);

  return (
    <div>
      <h1>Tic Tac Toe App</h1>
      <Board
        strikeClass={strikeClass}
        playerTurn={playerTurn}
        box={box}
        onClick={handleClick}
      />

      <GameOver gameState={gameState} />
    </div>
  );
};

export default TicTacToe;
