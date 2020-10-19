import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HelperAPI from "./HelperAPI";
import PokemonGallery from "./PokemonGallery";
import FusePokemon from "./FusePokemon";
import Title from "./Title";
import FusedPokemon from "./FusedPokemon";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleSelectPokemon = (name) => {
    if (selectedPokemon.length === 2) {
      setSelectedPokemon(selectedPokemon.filter(n => n !== name))
      return;
    }
    if (selectedPokemon.length === 1 && selectedPokemon.includes(name)) {
      setSelectedPokemon([]);
      return;
    }

    setSelectedPokemon([...selectedPokemon, name]);
  }

  useEffect(() => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, []);

  const [firstSelected, secondSelected] = selectedPokemon;

  return (
    <div className="App">
      <Title />
      <button>Clear fusion</button>
      <PokemonGallery pokemonList={pokemonList} selectedPokemon={selectedPokemon} handleSelectPokemon={handleSelectPokemon} />
    </div>
  );
}

export default App;
