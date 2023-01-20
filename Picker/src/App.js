
import React from "react";
import './styles.css'
import Hue from './hue';
import Satu from './saturation';
import Steps from './steps';

function App(){
  return (
    <div className="inputs">
    <Hue/>
    <Satu/>
    <Steps/>
    <div id="cuadrohue">
    <label>Hue: </label>
    <output id="valHue">0</output>
    </div>
    <div id="cuadroSatu">
    <label>Saturation: </label>
    <output id="valSatu">0</output>
    </div>
    <div id="cuadroSteps">
    <label>Steps: </label>
    <output id="valSteps">0</output>
    </div>
    </div>
  )
}


export default App;
