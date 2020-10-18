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

### Part 1: HelperAPI, datastructures, API and App.tsx

We have provided some help in `HelperAPI.jsx` that exports a spectrum of functions that can be used for those that wants.

Our HelperAPI contains the following methods, and can be used in the following way:

```jsx
import React from "react";
import HelperAPI from "./HelperAPI";

const App = () => {

    const helperFunctions = () => {
        // Returns a src location for pixelated image
        HelperAPI.getPixelatedPokemonImageById(id)
        // Returns artistic high res image source
        HelperAPI.getArtisticPokemonImageById(id)
        // Returns artistic high res svg source
        HelperAPI.getArtisticPokemonSvgById(id)
        // sets state with a list of the first 151 pokemon
        HelperAPI.getFirst151PokemonAsync(setState);
        // Given a setState function and pokemonId, get pokemon information
        HelperAPI.getPokemonAsync(setState, id);
    }
    
    // return JSX-template
}
```

### Part 2: Reusable components


### Part 3: onClick events and passing functions as props

### Part 4: <Insert Title>
...
### Part N: <Title N>
