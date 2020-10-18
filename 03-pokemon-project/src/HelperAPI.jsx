export const someFunc = () => { console.log("Some func"); }

export const getPokemon = () => { console.log("Getting pokemon") };


// https://pokeapi.co/api/v2/pokemon-form/1/

/*
Gir en payload med følgende resultat

{
    ...data,
    name: PokemonName
    id: PokeId,
    sprites: {
        // bildeURLer
    }
}
*/


// Favorittendepunkt https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=151
/*
Gir en payload på følgende resultat

{
    count: Number,
    next: "Link til neste page",
    previous: null,
    results: [
        {
            name: PokemonName,
            url: Lenke til pokemon info
        },
        ...rest
    ]
}

*/

export const getPixelatedPokemonImageById = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
export const getArtisticPokemonImageById = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
export const getArtisticPokemonSvgById = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export const getFirst151PokemonAsync = setStateFunc => fetch("https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=151")
    .then(res => res.json())
    .then(data => setStateFunc(data));

export const getPokemonAsync = (setStateFunc, pokemonIdOrName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`)
        .then(res => res.json())
        .then(data => setStateFunc(data));
}


export default {
    someFunc,
    getPokemon,
    getPokemonAsync,
    getPixelatedPokemonImageById,
    getArtisticPokemonImageById,
    getArtisticPokemonSvgById,
    getFirst151PokemonAsync
}
