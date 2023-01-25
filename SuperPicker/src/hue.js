import React from "react";
import './styles.css'
import { useState } from "react";


function Hue(props ){
    const {onChange} = props;
    const [hue, setHue] = useState(170);
    onChange(hue);
    return (
      <div id="hueInput">
      <label>Hue: </label>
      <input type="range" max="360" id="hue" onInput={e => setHue(e.target.value)}></input>
      <output id="num">{hue}</output>
      </div>
    )
  }

  export default Hue;