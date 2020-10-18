import React from "react";
import HelperAPI from "./HelperAPI";
import Pokemon from "./Pokemon";

const Fused = ({ src }) => <img width="auto" height="100" src={src} />;


export default ({ selected }) => {

    if (!selected) {
        return null;
    }

    const {
        first,
        second
    } = selected;

    return <div className="pokeContainer">
        {first && <Pokemon pokemon={first} />}
        {second && <Pokemon pokemon={second} />}
        {first && second && <Fused src={HelperAPI.getFusedPokemon(first.id, second.id)} />}
    </div>
}