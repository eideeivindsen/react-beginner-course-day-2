import React from "react";
import Pokemon from "./Pokemon";

export default ({ pokemonList }) => {
  return (
    <div className="pokeContainer">
      {pokemonList.map(name => (
        <Pokemon key={name} name={name} />
      ))}
    </div>
  );
};
