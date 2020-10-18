import React, { useEffect, useState } from 'react';
import HelperAPI from "./HelperAPI";

const FusedPokemon = ({firstName, secondName}) => {
    const [firstId, setFirstId] = useState()
    const [secondId, setSecondId] = useState()

      useEffect(() => {
        HelperAPI.getPokemonId(firstName).then((id) => setFirstId(id));        
        HelperAPI.getPokemonId(secondName).then((id) => setSecondId(id));        
    }, [firstName, secondName, setFirstId, setSecondId]);

    const getFusedImageUrl = () => {
        return firstId && secondId
          ? `https://images.alexonsager.net/pokemon/fused/${firstId}/${firstId}.${secondId}.png`
          : "";
      };

      const handleClick = () => {

      }

    return (
        <>
            <img src={getFusedImageUrl()} />
            <button onClick={handleClick}>Fuse</button>
        </>
    )
}

export default FusedPokemon;