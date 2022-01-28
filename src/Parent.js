import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");
  

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); 
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;


 // const [mood, setMood] = useState('chill');

  // function handleGettingToWork() {
  //   setMood('stressed')
  // }
  // function handleClockOut(){
  //   setMood('relieved')
  // }

  // return (
  // <div>
  //   <p>i am {mood}</p> 
  //   <button onClick={handleGettingToWork}>clock in</button> 
  //   <button onClick={handleClockOut}>clock out</button>
  // </div>)