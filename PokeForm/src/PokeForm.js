const DEFAULT_LANGUAGE = '7' // Español
import { getPokemonData, getSpeciesSprite } from "./pokemon_api";
import { useState, useEffect } from "react";
function pokemonsInLanguage(pokemons, language) {
  if(pokemons.local_language_id === language){
    return pokemons.name
  }
}

function PokeForm() {
  const [inputNombre, setNombre] = useState('');
  const [selectLang, setLang] = useState(DEFAULT_LANGUAGE);
  const [pokedata, setPokedata] = useState([]);

  useEffect(() => {
    async function load(){
      let datos = await getPokemonData();
      setPokedata(datos);
    }
    load()
  })
  function handleClick(e){
    e.preventDefault();
    Object.entries(pokedata).forEach(([key, value])=> {
      if(value.name === inputNombre && value.local_language_id === selectLang){
        console.log('Pokemon con idioma correcto');
      }else{
        throw `No se ha encontrado el Pokemon`;
      }
    })
  }

  return (
    <div>
      <h2>PokeForm</h2>
      <form>
        <label>
          Nombre del pokèmon:
          <input type="text" name="name" list="pokemons" value={inputNombre} onChange={(e) => setNombre(e.target.value)}/>
        </label>
        <datalist id="pokemons">
           { pokedata.map((pokemon) => <option value={pokemonsInLanguage(pokemon, selectLang)}></option>) }
        </datalist>
        <label>
          Lenguaje
          <select value={selectLang} onChange={(e) => setLang(e.target.value)}>
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>
        <input type="submit" value="Search" onClick={handleClick}/>
      </form>
    </div>
  )
}

export default PokeForm
