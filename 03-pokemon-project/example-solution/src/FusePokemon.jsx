import React from "react";
import Pokemon from "./Pokemon";
import FusedPokemon from "./FusedPokemon";

export default ({ first, second }) => {
  
  return (
    <div className="pokeContainer">
      <Pokemon name={first} />
      <FusedPokemon first={first} second={second} />
      <Pokemon name={second} />
    </div>
  );
};
