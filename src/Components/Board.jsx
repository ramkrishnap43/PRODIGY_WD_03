import React from "react";
import Box from "./Box";
import Strike from "./Strike";
import "../App.css";

const Board = ({ box, onClick }) => {
  return (
    <div className="board">
      <Box
        onClick={() => onClick(0)}
        value={box[0]}
        className="right-border bottom-border left-border top-border"
      />
      <Box
        onClick={() => onClick(1)}
        value={box[1]}
        className="right-border bottom-border top-border"
      />
      <Box
        onClick={() => onClick(2)}
        value={box[2]}
        className="right-border bottom-border top-border"
      />
      <Box
        onClick={() => onClick(3)}
        value={box[3]}
        className="right-border bottom-border left-border "
      />
      <Box
        onClick={() => onClick(4)}
        value={box[4]}
        className="right-border bottom-border"
      />
      <Box
        onClick={() => onClick(5)}
        value={box[5]}
        className="right-border bottom-border"
      />
      <Box
        onClick={() => onClick(6)}
        value={box[6]}
        className="right-border bottom-border left-border "
      />
      <Box
        onClick={() => onClick(7)}
        value={box[7]}
        className="right-border bottom-border"
      />
      <Box
        onClick={() => onClick(8)}
        value={box[8]}
        className="right-border bottom-border"
      />
      <Strike />
    </div>
  );
};

export default Board;
