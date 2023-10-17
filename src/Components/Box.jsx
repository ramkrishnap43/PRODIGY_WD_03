import React from "react";
import "../App.css"

const Box = ({className, value, onClick}) => {
  return <div onClick={onClick} className =  {`box ${className}`}>{value}</div>;
};

export default Box;
