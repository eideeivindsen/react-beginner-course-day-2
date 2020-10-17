import React from 'react';
import { useState } from 'react';
import Avatar from "./Avatar";
import pokemonList from "./pokemon";

const Pokemon = ({ first, second, third }) => {
  const [pokeState, setPokeState] = useState(0);

  const handleClick = () => {
    setPokeState(pokeState < 2 ? pokeState + 1 : 0);
  }

  return <div onClick={handleClick}>
    {pokeState === 0 && <Avatar {...first} />}
    {pokeState === 1 && <Avatar {...second} />}
    {pokeState === 2 && <Avatar {...third} />}
  </div>
}

const App = () => {
  return <React.Fragment>
    {pokemonList.map(({ id, ...pokemon }) => <Pokemon key={id} {...pokemon} />)}
  </React.Fragment>
}

export default App;
