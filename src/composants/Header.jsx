import React from "react";
import pokedex from '../res/logo_pokedex.png';
import "../styles/header.css"
import Langue from "./Langue";

function Header({ searchtext, langtype }) {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img className="logo_pokedex" src={pokedex} alt="logo" />
        </div>
        <div className="langue_select">
        </div>
        <Langue languetype={langtype} />
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Rechercher un pokemon..." className="input_searchbar" onChange={event => searchtext(event.target.value)} />
      </div>
    </div>
  );

  // Remplacer par type json
}

export default Header;
