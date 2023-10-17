import React from "react";
import "../App.css";

const Box = ({ className, value, onClick, playerTurn }) => {

    let hoverClass = null;
    if(value == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }


  return (
    <div onClick={onClick} className={`box ${className} ${hoverClass}`}>
      {value}
    </div>
  );
};

export default Box;
