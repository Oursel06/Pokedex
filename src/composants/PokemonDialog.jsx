import Type from "./Type.jsx";
import React, { useEffect, useState } from 'react';

function PokemonDialog({ id }) {

  const [pokemonItem, setpokemonItem] = useState([]);
  const [promise, promiseok] = useState(true);
  const move = [];

  useEffect(() => {
    async function fetchData() {
      fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
        .then(res => res.json())
        .then(
          (result) => {
            promiseok(false)
            setpokemonItem(result)
            return (
              <div></div>
            )
          }
        )
    }
    fetchData()
  }, [])

  return (
    <div className="pokemondialog">
      {(!promise) ?
        <div>
          <i>N° : {pokemonItem[id - 1].id}</i><br />
          <h2 className="pokedexnom">{pokemonItem[id - 1].names["fr"]}</h2>
          <img src={pokemonItem[id - 1].image} alt="pokemon" />
          <Type pType={pokemonItem[id - 1].types[0]} sType={pokemonItem[id - 1].types[1]} />
          <p>Hauteur : {pokemonItem[id - 1].height}m</p>
          <p>Poid : {pokemonItem[id - 1].weight}kg</p>
          {pokemonItem[id - 1].moves.forEach(itemmove => {
            move.push(<li>{itemmove}</li>)
          })}
          {move}
        </div>
        :
        <p>Chargement</p>
      }
    </div>
  );
}

export default PokemonDialog;
