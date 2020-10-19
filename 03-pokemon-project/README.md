# Pokemon Fusion Evolution


## Project description

> Skal inneholde den overordnede beskrivelsen av prosjektet

Hi and welcome to **Project Pokemon Fusion**. In this module of our react course, we will be making a web-application that fuses two pokemon together into a fused version! The project will use an external API that has information about every single pokemon that exists.

Our thought process went something like this: To grasp React, our course-participants must develop an application with an external API. Getting hands-on experience for how React uses real data and external APIs is crucial, and thus we chose to create something with the nostalgic feel of pokemon.


## Spec and goals

The main goal is that the participant should gain knowledge in the following areas of React.

* Thinking in React; Components and modularity (reusable pieces of code and GUI-elements)
* Sending properties (props) from component to component (Parent / Child relationship)
* Be able to create interactivity with common hooks (useEffect and useState) and asynchronous HTTP-requests

### Top level spec

This is the top-level spec for the application. What should **Pokemon Fusion** do?

* Fetch and store information about an array of Pokemon.
* Use the external pokemon-API
* Split application-logic into reusable components
* Handle click events. Which pokemon does the user want to fuse?
* Handle a click event that fuses the chosen pokemon.
* The UX should be as simple as possible


## The guide

### 📌 Part 1: HelperAPI, datastructures and App.tsx

Part 1 will introduce the datastructrues we're working with, the `HelperAPI` we've made to help with abstactring away http-requests in a more seamless fashion and working with `App.tsx` in the initial start. 

#### HelperAPI and datastructures

Before we begin coding, here's a preview of the data.

Below is a payload from the pokeAPI. The `results` property contains an array of objects. These objects have a `name` property we're going to use extensively throughout our application.

```js
{
  "count": 1050,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=3&limit=3",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    }
  ]
}
```

We have provided a `HelperAPI` that does a lot of the work behind the scenes, but you must handle the Promise yourself. Our HelperAPI contains the following methods, and can be used in the following way:


```jsx
import React from "react";
import HelperAPI from "./HelperAPI";

HelperAPI.getPokemon(); // returns a Promise with an array of pokemon names
HelperAPI.getPokemonId(name); // returns a Promise with the id for a given pokemon name

const App = () => {
  // use the helper API + component logic
};
```
Examples for handling a Promises given by the helper functions.

```jsx
HelperAPI.getPokemon().then(pokemonNames => setPokemonNames(pokemonNames));
HelperAPI.getPokemonId("mew").then(id => setPokemonId(id));
```

#### **App.tsx**

In App.tsx do the following:
- Create component state that store all the pokemon from the API-request `HelperAPI.getPokemon()`.
- The request must be called on the first render only.

<details><summary>🔑 Solution</summary>
<br>

```jsx
import React, { useState } from "react";
import HelperAPI from "./HelperAPI";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, []);

  return (
    <div className="App">
      Example application
      <p>{pokemonList.length}</p>
    </div>
  );
}

export default App;

```
</details>
<br />

#### **Create a fitting title**

Create a new file called: `Title.jsx`
Make it render a fitting title. Use the component in App.tsx

<details><summary>🔑 Solution</summary>
<br>

```jsx
// Title.jsx
import React from "react";

const Title = () => {
    return <h1 style={{ font: "Helvetica Neue", fontWeight: 150 }}>Pokemon Fusion</h1>
}

export default Title;
```

```jsx
// App.jsx
import React, { useState, useEffect } from "react";
import HelperAPI from "./HelperAPI";

import Title from "./Title";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, []);

  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
```
</details>
<br />



### 📌 Part 2: Display all your pokemon on screen

We want to display all the photos for all the pokemons we now have stored in our state. Remember, the state is an array of names.

Lets create a new file called `PokemonGallery.jsx`

`PokemonGallery` should do the following:
- Recieve a list of pokemon-names as a property
- Map over these names, for each name return a div displaying the name
- Pass the list of pokemon names as a prop from `App.tsx`

A reiteration for how one can pass props to a component, and make that component use the recieved props

```jsx
// sending props
<MyComponent propName={variableName} />

// recieving props
const MyComponent = ({ propName }) => {
  // do things
}
```

<details><summary>🔑 Solution</summary>
<br>

```jsx
// PokemonGallery.jsx
import React from "react";

const PokemonGallery = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList.map(name => (
        <div key={name}>{ name }</div>
      ))}
    </div>
  );
};
```

```jsx
// App.jsx
import React, { useState, useEffect } from "react";
import HelperAPI from "./HelperAPI";

import Title from "./Title";
import PokemonGallery from "./PokemonGallery";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, []);

  return (
    <div className="App">
      <Title />
      <PokemonGallery pokemonList={pokemonList} />
    </div>
  );
}

export default App;
```
</details>
<br />


#### Pokemon component

Lets create a pokemon-component that can display a pixelated image of a pokemon, given their `pokemonId`.
Our HelperAPI has a method for getting an `ID` for a given pokemon name.

Create a new file called: `Pokemon.jsx`. `<Pokemon />` should do the following:
- Receive `name` as a prop.
- Create state that can store and capture it's `id`
- Request the pokemonId with HelperAPI on initial render (useEffect)
- Display the image of an pokemon.
- Update `PokemonGallery` to use the new `Pokemon` component instead of displaying names

<details><summary>🔑 Solution</summary>
<br>

```jsx
// Pokemon.jsx
import React, { useEffect, useState } from "react";
import HelperAPI from "./HelperAPI";

const Pokemon = ({ name }) => {
  const [id, setId] = useState();

  useEffect(() => {
      if(name) {
          HelperAPI.getPokemonId(name).then((id) => setId(id));
      }
  }, [name]);

  const getImageUrl = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
      <>
        {name && <img width="auto" height="100" src={getImageUrl()}></img>}
      </>
  )
};

export default Pokemon;
```

```jsx
// PokemonGallery.jsx
import React from "react";
import Pokemon from "./Pokemon";

const PokemonGallery = ({ pokemonList }) => {
  return (
    <div className="pokeContainer">
      {pokemonList.map(name => (
        <Pokemon key={name} name={name} />
      ))}
    </div>
  );
};

export default PokemonGallery;
```
</details>
<br />

### 📌 Part 4: The Fusion



### 📌 Part 3: onClick events and passing functions as props

### 📌 Part 4: The Fusion
...
### 📌 Part N: <Title N>
