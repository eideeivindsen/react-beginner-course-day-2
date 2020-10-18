# Pokemon Fusion Evolution


## Project description

> Skal inneholde den overordnede beskrivelsen av prosjektet

Hi and welcome to **Project Pokemon Fusion**. In this module of our react course, we will be making a web-application that fuses two pokemon together into a fused version! The project will use an external API that has information about every single pokemon that exists.

Our thought process went something like this: To grasp React, our course-participants must develop an application with an external API. Getting hands-on experience for how React uses real data and external APIs is crucial, and thus we chose to create something with the nostalgic feel of pokemon.


## Specc and goals

The main goal is that the participant should gain knowledge in the following areas of React.

* Thinking in components (reusable pieces of code and GUI-elements)
* Sending properties (props) from component to component (Parent / Child relationship)
* Be able to create interactivity with common hooks (useEffect and useState) and asynchronous HTTP-requests

### Top level specc

This is the top-level specc for the application. What should **Pokemon Fusion** do?

* The application must get and store information about an array of Pokemon.
* The application must use the external pokemon-API
* The application should split application-logic into reusable components
* The application must be able to handle click events. Which pokemon does the user want to fuse?
* The application must handle a click event that fuses the chosen pokemon.
* The UX should be as simple as possible


## The guide

### Part 1: HelperAPI, datastructures and App.tsx

Part 1 will introduce the datastructrues we're working with, the `HelperAPI` we've made to help with abstactring away http-requests in a more seamless fashion and working with `App.tsx` in the initial start. 

#### HelperAPI and datastructures

Before we begin coding, here's an overview over which kind of data we're working with, i.e. our datastructure.

here's a payload from the pokeAPI. The `results` property contains an array of objects. These objects has a `name` property we're going to use extensively throughout our application.

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

We have provided a `HelperAPI` that does a lot of the work behind the scenes, but you must handle the Promise by yourself. Our HelperAPI contains the following methods, and can be used in the following way:


```jsx
import React from "react";
import HelperAPI from "./HelperAPI";

HelperAPI.getPokemon(); // returns a Promise with an array of pokemon names
HelperAPI.getPokemonId(name); // returns a Promise with the id for a given pokemon name

const App = () => {
  // use the helper API + component logic
};
```
Examples for handling a the Promises given by the helper functions.

```jsx
HelperAPI.getPokemon().then(pokemonNames => setPokemonNames(pokemonNames));
HelperAPI.getPokemonId("mew").then(id => setPokemonId(id));
```

#### **App.tsx**

In App.tsx do the following:
- Create component state that keeps track of all the pokemon from the API-request.
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
    </div>
  );
}

export default App;

```
</details>
<br />

#### **Create a fitting title**

Create a new file called: `Title.jsx`
Make it create a fitting title, and use the component in App.tsx

<details><summary>🔑 Solution</summary>
<br>

```jsx
// Title.tsx
import React from "react";

const Title = () => {
    return <h1 style={{ font: "Helvetica Neue", fontWeight: 150 }}>Pokemon Fusion</h1>
}

export default Title;
```

```jsx
// App.tsx
import React, { useState } from "react";
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



### Part 2: Display all your pokemon on screen

We want to display all the photos for all the pokemons we now have stored in our `pokemonList` state. Remember, pokemonList is an array of names.

Lets create a new file called `PokemonDisplayer.jsx`

Inside `PokemonDisplayer` we are going to expect a list of pokemon-names as a prop.

```jsx
// sending props
<MyComponent propName={variableName} />

// recieving props
const MyComponent = ({ propName }) => {
  // do things
}
```





### Part 3: onClick events and passing functions as props

### Part 4: <Insert Title>
...
### Part N: <Title N>
