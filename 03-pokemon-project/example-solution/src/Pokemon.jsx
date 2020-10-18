import React, { useEffect, useState } from "react";
import HelperAPI from "./HelperAPI";

const Pokemon = ({ name }) => {
  const [id, setId] = useState();

  useEffect(() => {
      if(name) {
          HelperAPI.getPokemonId(name).then((id) => setId(id));
      }
  }, [name]);

  const getImageUrl = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
      <>
        {name && <img width="auto" height="100" src={getImageUrl()}></img>}
      </>
  )
};

export default Pokemon;