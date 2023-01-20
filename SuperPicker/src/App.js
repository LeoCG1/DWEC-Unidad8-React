
import React from "react";
import './styles.css'
import Gradient from './gradient';
import { useState } from "react";

function App(){
  
  const [valorHue, setHue] = useState();
  const [valorSatu, setSatu] = useState();
  const [valorSteps, setSteps] = useState();

  return (
    <div className="inputs">
    <div id="hueInput">
      <label>Hue: </label>
      <input type="range" max="360" id="hue" onInput={() => setHue(document.getElementById('hue').value)}></input>
      <output id="num">{valorHue}</output>
      </div>
      <div id="satuInput">
      <label>Saturation: </label>
      <input type="range" min="0" max="100" id="satu" onInput={() => setSatu(document.getElementById('satu').value)}></input>
      <output id="num2">{valorSatu}</output>
      </div>
      <div id="stepsInput">
      <label>Steps: </label>
      <input type="range" min="0" max="10" id="steps" onInput={() => setSteps(document.getElementById('steps').value)}></input>
      <output id="num3">{valorSteps}</output>
      </div>
    <div className="squares">
      <Gradient hue={valorHue} saturation={valorSatu} number={valorSteps}/>
    </div>
    </div>
  )
}


export default App;
