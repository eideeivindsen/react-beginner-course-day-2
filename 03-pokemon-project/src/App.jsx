import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HelperAPI from "./HelperAPI";


function App() {

  const [state, setState] = useState(null);

  useEffect(() => {
    HelperAPI.someFunc();
    HelperAPI.getPokemon();
    HelperAPI.getPokemonAsync(setState);
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
