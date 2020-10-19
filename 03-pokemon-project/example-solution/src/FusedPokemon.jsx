import React from 'react';
import Avatar from './Avatar';

const FusedPokemon = ({ first = null, second = null }) => {

    return first && second &&
        <Avatar
            className="fusedPokemon"
            name={first.name.substring(0, Math.ceil(first.name.length / 2))
                + second.name.substring(Math.floor(second.name.length / 2))
            }
            imageUrl={`https://images.alexonsager.net/pokemon/fused/${first.id}/${first.id}.${second.id}.png`}
        />;
}

export default FusedPokemon;