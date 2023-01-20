import React from "react";
import './styles.css'


function upgradeHue(value){
    document.getElementById("num").value = value;
    document.getElementById("valHue").value = value;
  }

  function Hue(){
    return (
      <div id="hueInput">
      <label>Hue: </label>
      <input type="range" max="360" id="hue" onInput={() => upgradeHue(document.getElementById('hue').value)}></input>
      <output id="num">0</output>
      </div>
    )
  }

  export default Hue;