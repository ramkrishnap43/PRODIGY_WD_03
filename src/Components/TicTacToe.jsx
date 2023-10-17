import React, { useState } from 'react'
import Board from './Board';


const PLAYER_X = "X";
const PLAYER_O = "O"

const TicTacToe = () => {

    const [box, setBox] = useState(Array(9).fill(null));

    const [playerTurn , setPlayerTurn] = useState(PLAYER_X);

    const handleClick = (index) => {
        // console.log(index)

        if(box[index] !== null){
            return;
        }

        const newBox = [...box];
        newBox[index] = playerTurn;
        setBox(newBox)

        if(playerTurn === PLAYER_X){
            setPlayerTurn(PLAYER_O)
        }
        else{
            setPlayerTurn(PLAYER_X)
        }
    }


  return (
    <div>
        <h1>Tic Tac Toe App</h1>
        <Board box={box} onClick={handleClick} />
    </div>
  )
}

export default TicTacToe