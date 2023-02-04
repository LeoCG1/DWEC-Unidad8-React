import React from "react";
import './styles.css'

function Gradient(props){
    const {hue, saturation, number} = props;
    let interval = 100/number;
    let luminosidad = 0;
    let square = [];
    for(let i = 0;i<number;i++){
      let gradient = {
        backgroundColor : `hsl(${hue}, ${saturation}%, ${luminosidad}%)`,
      }
      square.push(<div className="square" key={i} style={gradient}></div>)
      luminosidad+=interval;
    }
    return square;
  }

  export default Gradient;