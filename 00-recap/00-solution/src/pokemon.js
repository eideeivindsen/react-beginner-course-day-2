const url = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
const pokemon = [
    {
        id: 1,
        first: {
            name: "Bulbasaur",
            imageUrl: url(1),
        },
        second: {
            name: "Ivysaur",
            imageUrl: url(2),
        },
        third: {
            name: "Venysaur",
            imageUrl: url(3),
        }
    }, {
        id: 2,
        first: {
            name: "Charmander",
            imageUrl: url(4),
        },
        second: {
            name: "Charmeleon",
            imageUrl: url(5),
        },
        third: {
            name: "Charizard",
            imageUrl: url(6),
        }
    },
    {
        id: 3,
        first: {
            name: "Squirtle",
            imageUrl: url(7),
        },
        second: {
            name: "Squirtoise",
            imageUrl: url(8),
        },
        third: {
            name: "Blastoise",
            imageUrl: url(9),
        }
    },
    {
        id: 4,
        first: {
            name: "Caterpie",
            imageUrl: url(10),
        },
        second: {
            name: "Metapod",
            imageUrl: url(11),
        },
        third: {
            name: "Butterfree",
            imageUrl: url(12),
        }
    }
]

export default pokemon
