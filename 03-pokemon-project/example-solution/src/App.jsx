import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HelperAPI from './HelperAPI';
import PokemonDisplayer from './PokemonDisplayer';
import FusePokemon from "./FusePokemon";
import Title from "./Title";

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [selected, setSelected] = useState(null);


  const handleResetSelected = () => setSelected(null)

  const handleSelectPokemon = (pokemon) => {
    if (!selected?.first) {
      setSelected({ ...selected, first: { ...pokemon } });
    };

    if (!selected?.second) {
      setSelected({ ...selected, second: { ...pokemon } })
    }
  }

  useEffect(() => {
    if (!pokemon) {
      HelperAPI.getFirst151PokemonAsync(setPokemon);
    }
  }, [pokemon])

  return (
    <div className="App">
      <Title />
      <button onClick={handleResetSelected}>Clear fusion</button>
      <PokemonDisplayer pokemonList={pokemon} handleSelectPokemon={handleSelectPokemon} />
      <FusePokemon selected={selected} />
    </div>
  );
}

export default App;
