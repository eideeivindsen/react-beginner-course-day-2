import React, { useEffect, useState } from 'react';
import HelperAPI from "./HelperAPI";

const FusedPokemon = ({ first, second }) => {
    const [showFused, setShowFused] = useState(false);


    const handleClick = () => {
        setShowFused(true);
    }

    return (
        <>
            {showFused && <img height="100px" width="auto" />}
            <button onClick={handleClick}>Fuse</button>
        </>
    )
}

export default FusedPokemon;