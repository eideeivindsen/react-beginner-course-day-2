import React from "react";
import Avatar from "./Avatar";

const PokemonGallery = ({ pokemonList, selectedPokemon, handleSelectPokemon }) => {
  return (
    <div className="pokeContainer">
      {pokemonList.map(({ name, id }) => (
        <div key={name} className={selectedPokemon.includes(id) ? "selected" : "unselected"} onClick={() => handleSelectPokemon(id)}>
          <Avatar name={name} imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        </div>
      ))}
    </div>
  );
};

export default PokemonGallery;
