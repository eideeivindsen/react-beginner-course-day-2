import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HelperAPI from "./HelperAPI";

export default ({ pokemon, handleSelectPokemon }) => {

    console.log(pokemon);

    const [allPokemonInfo, setAllPokemonInfo] = useState(null);

    useEffect(() => {
        if (!allPokemonInfo) {
            HelperAPI.getPokemonAsync(setAllPokemonInfo, pokemon?.name);
        }
    }, [])

    return allPokemonInfo && <img width="auto" height="100" onClick={() => handleSelectPokemon(allPokemonInfo)} src={HelperAPI.getPixelatedPokemonImageById(allPokemonInfo.id)}></img>
}