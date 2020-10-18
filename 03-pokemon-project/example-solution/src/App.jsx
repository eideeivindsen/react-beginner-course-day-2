import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HelperAPI from "./HelperAPI";
import PokemonDisplayer from "./PokemonDisplayer";
import FusePokemon from "./FusePokemon";
import Title from "./Title";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
      setFirst(pokemon[0])
      setSecond(pokemon[1])
    });
  }, []);

  return (
    <div className="App">
      <Title />
      <button>Clear fusion</button>
      <PokemonDisplayer pokemonList={pokemonList} />
      <FusePokemon first={first} second={second} />
    </div>
  );
}

export default App;
