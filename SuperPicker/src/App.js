
import React from "react";
import './styles.css'
import Gradient from './gradient';
import Hue from './hue';
import Satu from './saturation';
import Steps from './steps';
import { useState } from "react";

function App(){
  
  const [valorHue, setHue] = useState();
  const [valorSatu, setSatu] = useState();
  const [valorSteps, setSteps] = useState();

  return (
    <div className="inputs">
    <div id="hueInput">
      <Hue onChange={valor => setHue(valor)}/>
      <Satu onChange={valor => setSatu(valor)}/>
      <Steps onChange={valor => setSteps(valor)}/>
      </div>
    <div className="squares">
      <Gradient hue={valorHue} saturation={valorSatu} number={valorSteps}/>
    </div>
    </div>
  )
}


export default App;
