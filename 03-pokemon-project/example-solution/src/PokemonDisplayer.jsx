import React from "react";
import Pokemon from "./Pokemon";

const PokemonDisplayer = ({ pokemonList }) => {
  return (
    <div className="pokeContainer">
      {pokemonList.map(name => (
        <Pokemon key={name} name={name} />
      ))}
    </div>
  );
};

export default PokemonDisplayer;
