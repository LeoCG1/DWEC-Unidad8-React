
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

function App(){
  return (
    <>
    <h1>Gradients</h1>
    <div className="squares">
      <Gradient hue={23} saturation={100} number={5}/>
    </div>
    </>
  )
}

export default App;
