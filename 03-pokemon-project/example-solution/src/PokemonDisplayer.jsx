import React from "react";
import Pokemon from "./Pokemon";


export default ({ pokemonList = [], handleSelectPokemon }) => {

    return pokemonList && <div className="pokeContainer">
        {pokemonList.map(pokemon => <Pokemon key={pokemon?.name} pokemon={pokemon} handleSelectPokemon={handleSelectPokemon} />)}
    </div>
}