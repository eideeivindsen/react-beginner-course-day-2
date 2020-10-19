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

export const getPokemon = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=10')
        .then((res) => res.json())
        .then((data) => new Promise((resolve) => resolve(data.results.map(({ name }) => name))));

};

export const getPokemonId = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((data) => new Promise((resolve) => resolve(data.id)));
};

export default {
    getPokemon,
    getPokemonId,
};
