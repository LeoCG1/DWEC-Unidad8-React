import React from "react";
import './styles.css'
import { useState } from "react";

 function Steps(props){
  const {onChange} = props;
  const [step, setStep] = useState(5);
  onChange(step);
    return (
      <div id="stepsInput">
      <label>Steps: </label>
      <input type="range" min="0" max="10" id="steps" onInput={e => setStep(e.target.value)}></input>
      <output id="num3">{step}</output>
      </div>
    )
  }

  export default Steps;