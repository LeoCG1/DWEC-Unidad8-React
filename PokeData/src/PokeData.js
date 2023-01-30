import './pokedata.css';
import Loading from './Loading';
import getSpeciesSprite from './getSpeciesSprite';

function PokeData() {
  const {image, loading} = getSpeciesSprite(25);

  return (
    <Loading loading={loading}>
    <>
        <h2>PokeData</h2>
        <div className='pokedata'>
            <img alt="pokemon image" src={image} />
        </div>
      </>
  </Loading>
  )
  
}

export default PokeData
