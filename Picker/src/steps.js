import React from "react";
import './styles.css'


function upgradeSteps(value){
    document.getElementById("num3").value = value;
    document.getElementById("valSteps").value = value;
  }
  
  
  function Steps(){
    return (
      <div id="stepsInput">
      <label>Steps: </label>
      <input type="range" min="0" max="10" id="steps" onInput={() => upgradeSteps(document.getElementById('steps').value)}></input>
      <output id="num3">0</output>
      </div>
    )
  }

  export default Steps;