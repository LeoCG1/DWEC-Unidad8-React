import React from "react";
import PokeForm  from './PokeForm';
import PokeData from './PokeData';
import './pokedex.css'
import {useState} from 'react';

function Pokedex() {
  const [iden, setId] = useState();
  return (
    <div>
      <h1>Pokedex</h1>
        <PokeForm enviar={setId}/>
        {iden && <PokeData id={iden}/>}
    </div>
  )
}

export default Pokedex
