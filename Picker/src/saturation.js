import React from "react";
import './styles.css'

function upgradeSatu(value){
    document.getElementById("num2").value = value;
    document.getElementById("valSatu").value = value;
  }

  function Satu(){
    return (
      <div id="satuInput">
      <label>Saturation: </label>
      <input type="range" min="0" max="100" id="satu" onInput={() => upgradeSatu(document.getElementById('satu').value)}></input>
      <output id="num2">0</output>
      </div>
    )
  }

  export default Satu;