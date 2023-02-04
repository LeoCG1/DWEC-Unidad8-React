const DEFAULT_LANGUAGE = '7' // Español
import { getPokemonData, getSpeciesSprite } from "./pokemon_api";
import { useState, useEffect } from "react";
function pokemonsInLanguage(pokemons, language) {
  return pokemons?.filter(pokemon => pokemon.local_language_id === language)
}

function PokeForm(props) {
  const {enviar} = props;
  const [inputNombre, setNombre] = useState('');
  const [selectLang, setLang] = useState(DEFAULT_LANGUAGE);
  const [pokedata, setPokedata] = useState([]);

  useEffect(() => {
    async function load(){
      let datos = await getPokemonData();
      setPokedata(pokemonsInLanguage(datos, selectLang));
    }
    load()
  })
  function handleClick(e, inputNombre){
    e.preventDefault();
    let pokemon = pokedata?.find(pokemon => pokemon.name === inputNombre )
    pokemon ? enviar(pokemon.pokemon_species_id) : null;
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
           { pokedata.map(pokemon => <option key={pokemon.pokemon_species_id} value={pokemon.name}></option>) }
        </datalist>
        <label>
          Lenguaje
          <select value={selectLang} onChange={(e) => setLang(e.target.value)}>
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>
        <input type="submit" value="Search" onClick={(e) => handleClick(e, inputNombre)}/>
      </form>
    </div>
  )
}

export default PokeForm
