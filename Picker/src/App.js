
import React from "react";
import './styles.css'
import Hue from './hue';
import Satu from './saturation';
import Steps from './steps';
import { useState } from "react";


function App(){
  const [hue, setHue] = useState();
  const [sat, setSat] = useState();
  const [step, setSteps] = useState();
  return (
    <div className="inputs">
    <Hue onChange={value => setHue(value)}/>
    <Satu onChange={value => setSat(value)}/>
    <Steps onChange={value => setSteps(value)}/>
    <div id="cuadrohue">
    <label>Hue: </label>
    <output>{hue}</output>
    </div>
    <div id="cuadroSatu">
    <label>Saturation: </label>
    <output>{sat}</output>
    </div>
    <div id="cuadroSteps">
    <label>Steps: </label>
    <output>{step}</output>
    </div>
    </div>
  )
}


export default App;
