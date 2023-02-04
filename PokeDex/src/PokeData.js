import './pokedata.css';
import Loading from './Loading';
import getSpeciesSprite from './getSpeciesSprite';


function PokeData(props) {
  const {id} = props;
  const {image, loading} = getSpeciesSprite(id);

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
