# Pokemon Fusion Evolution


## Project description

> Skal inneholde den overordnede beskrivelsen av prosjektet

The project will use an external API that has information about every single pokemon that exists. We'll use this API to create a dynamic page that fuses together 2 different pokemons and display the result.


## Specc
> Mer spesifikk beskrivelse av prosjektet. Innholdet bør få frem veien fra start til slutt, og hvilket innhold koden bør ha for å få god forståelse av React.


* The application should fetch some pokemon
* The user should be able to choose two pokemons, and fuse them together, displaying a result
* The application must use different components (outsourcing logic and GUI-elements)
  * a `<Pokemon />` component
  * any other custom components of your choice (`<CustomComponent />`)
* The application must define state where suitable (`const [state, setState] = useState(init)`) to hold onto data and logical operations
* The application may use `useEffect(() => { /* logic */}, [ //deps ])` for a potential side-effect of loading a page (perhaps fetch the data you need in the beginning)
* displaying lists should DRY'ed (`myPokemonList.map(pokemon => <MyCustomComp name={pokemon.name} />)`)
  * DRY: The concept of writing as little code as possible, avoiding duplicating yourself
* Sending props as objects, functions, strings.
* Using conditional rendering with `if`-statements, terneray operators `cond ? true : false` or the `&&`-operator

the `<App />` component is gonna be our entrypoint for all further coding.


## Help

> Spesifikk hjelp vi tror deltagerne kan dra nytte av. Hjelp til punkter som vi tror kan være utfordrende. Det kommer selvfølgelig til å være et mangfold i forkunnskapene til deltagerne.  

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

## 
