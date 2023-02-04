import { useState, useEffect } from "react";

function getSpeciesSprite(id){
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();

    useEffect(() => {
        async function load(){
            setLoading(true);
            let llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/`+id);
            let respuesta = await llamada.json();
            setImage(respuesta.sprites.front_default);
            setLoading(false);
        }
        load();
    },[id])

    return {image, loading};
}

export default getSpeciesSprite;