import React, { useState, useEffect } from 'react';

// Hooks: Pokedexes
// hasError if here is no list

function PokedexList(props){
    const { api, onClick } = props;
    const [pokedexes, setPokedexes] = useState([]);

    useEffect(() => {
        // Pulls info from the api and returns the results as a list of Pokedexes
        api
            .getPokedexsList()
            .then((res) => {
                setPokedexes(res.results);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [api]); // Loads the api once and move on

    // Display an unordered list of pokedex names
    return (
        <>
           <div>{/** Buttons */}</div>
           <h1>Select a Pokedex!</h1>

        <ul>
            {pokedexes.map((pokedex) => (
                <li key={pokedex.name} className={pokedex.name}>
                    {pokedex.name}
                    <button onClick={() => onClick(pokedex.name)}>View</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default PokedexList;