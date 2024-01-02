import React, { useEffect, useState } from 'react';
import './Main.css';

const Main = () => {
  const [check, setCheck]= useState(false);

  useEffect(() => {
    setTimeout(()=>{
      const ele = document.getElementById("img");

      const newDiv = document.getElementById("newDiv");

      newDiv.style.display = "none";

      ele.setAttribute("src","/cute.gif");
    },3000)
  }, [check])
  
  const yesHandler = ()=>{
    if(check){
      setCheck(false);
    }else{
      setCheck(true);
    }
    const ele = document.getElementById("img");

    const newDiv = document.getElementById("newDiv");

    newDiv.style.display = "block";

    ele.setAttribute("src","/hurray.gif");
  }

  const mouseOverHandler = ()=>{
    var ele = document.getElementById("no");

    const maxWidth = window.innerWidth - ele.offsetWidth;
    const maxHeight = window.innerHeight - ele.offsetHeight;

    var newLeft = Math.floor(Math.random() * (maxWidth+1));
    var newTop = Math.floor(Math.random() * (maxHeight+1));

    ele.style.position = "absolute";
    ele.style.left = newLeft + "px";
    ele.style.top = newTop + "px";
  }

  return (
    <>
    <div className = "newDiv" id ="newDiv">Pata Tha Hamko!!!</div>
        <div className="container">
        <h3 className='question'>Mai Pizza manga lu?</h3>
          <div className="image-container">
          <img id = "img" src="/cute.gif" alt="imagesss" /> 
          </div>
          <div>
            <button className="yes-btn" onClick = {yesHandler}>Yes</button>
            <button className = "no-btn" id = "no" onMouseOver={mouseOverHandler} onClick={mouseOverHandler}>No</button>
          </div>
        </div>
    </>
  )
}

export default Main