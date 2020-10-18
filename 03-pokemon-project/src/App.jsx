import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HelperAPI from "./HelperAPI";


function App() {

  const [first151pokemon, setFirst151pokemon] = useState(null);
  const [mew, setMew] = useState(null);
  const [pokemonWithId, setPokemonWithId] = useState(null);

  useEffect(() => {

    if (!first151pokemon) {
      HelperAPI.getFirst151PokemonAsync(setFirst151pokemon);
    }

    if (!mew) {
      HelperAPI.getPokemonAsync(setMew, "mew");
    }

    if (!pokemonWithId) {
      HelperAPI.getPokemonAsync(setPokemonWithId, 4);
    }

  }, [])


  return (
    <div className="App">
      <img src={HelperAPI.getPixelatedPokemonImageById(3)} width="auto" height="200" />
      <img src={HelperAPI.getPixelatedPokemonImageById(3)} width="auto" height="200" />
      <img src={HelperAPI.getArtisticPokemonSvgById(4)} width="auto" height="200" />
    </div>
  );
}

export default App;
