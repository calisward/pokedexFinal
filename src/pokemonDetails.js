import React, { useState, useEffect } from 'react';

// Hook details
// hasError if details aren't available

function PokemonDetails(props) {
    // Passes pokemon because its after the pokemon is selected
    const { api, pokemon } = props;
    const [pokemonStats, setPokemonStats] = useState([]);

    useEffect(() => {
        // if the user gets this far then pull the response fron the selected pokemon
        api
          ?.getPokemonByName(pokemon)
          .then((res) => {
            setPokemonStats(res);
          })
          .catch((e) => {
            console.error(e);
          });
    }, [api, pokemon]); // Loading the entire api but with the list from the selected pokemon

    // Still loading the back and home page button as options
    // Shows the list the ? checking what was selected and then renders the list corresponding to the selected items
    // Stat calls is in the api and is written to be called in that way
    return (
        <>
            <div>
                <button onClick={props.goBack}>Back</button>
                <button onClick={props.goHome}>Home</button>
            </div>

            <img src={pokemonStats?.sprites?.front_default} alt="Unavailable" />

            <h1>You've selected {pokemonStats.name}</h1>
            <h2> Stats </h2>
            <ul>
                {pokemonStats?.stats?.map((stat, i) => (
                    <li key={i}>
                        {stat?.stat?.name} : {stat.base_stat}
                    </li>
                ))}
            </ul>

            <h2> Types </h2>
            <ul>
                {pokemonStats?.types?.map((type, i) => (
                    <li key={i}>{type?.type.name}</li>
                ))}
            </ul>

            <h2>Ability Stats </h2>
            <ul>
                {pokemonStats.abilities?.map((ability, i) => (
                    <li key={i}>{ability.ability.name}</li>
                ))}
            </ul>
        </>
    );
}

export default PokemonDetails;