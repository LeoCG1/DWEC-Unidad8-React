import React from "react";
import './styles.css'
import { useState } from "react";

function Satu(props){
  const {onChange} = props;
  const [sat, setSat] = useState(70);
  onChange(sat);
    return (
      <div id="satuInput">
      <label>Saturation: </label>
      <input type="range" min="0" max="100" id="satu" onInput={e => setSat(e.target.value)}></input>
      <output id="num2">{sat}</output>
      </div>
    )
  }

  export default Satu;