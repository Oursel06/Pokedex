import { React, useState } from "react"
import "../styles/pokemoncard.css";
import Type from "./Type.jsx";
import PokemonDialog from "./PokemonDialog.jsx";
import ReactModal from "react-modal";

function Pokemoncard({ id, name, image, typeP, typeS }) {

  const [ids, setIds] = useState(id);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("OK")
    setOpen(true);
    setIds(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pokedexcards">
      <div onClick={handleClickOpen} className="card">
        <i className="pokedexid">N° : {id}</i><br />
        <h2 className="pokedexnom">{name}</h2>
        <img src={image} alt="pokemon" />
        <Type pType={typeP} sType={typeS} />
      </div>
      <ReactModal isOpen={open} onRequestClose={handleClose}>
        <PokemonDialog id={ids}></PokemonDialog>
      </ReactModal>
    </div>
  );
}

export default Pokemoncard;
