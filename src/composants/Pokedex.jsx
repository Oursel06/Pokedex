import React from "react";
import Pokemoncard from './Pokemoncard.jsx';

function Pokedex({ pokemons, lgtype, search }) {

  const pokedex = [];

  pokemons.forEach((pokemon) => {
    if (pokemon.names[lgtype].toUpperCase().includes(search.toUpperCase())) {
      pokedex.push(<Pokemoncard key={pokemon.id} id={pokemon.id} name={pokemon.names[lgtype]} image={pokemon.image} typeP={pokemon.types[0]} typeS={pokemon.types[1]} />)
    }
  })

  return (
    <div className="pokedex">
      {pokedex}
    </div>
  );
}
export default Pokedex;
