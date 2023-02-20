import pokedex from '../res/logo_pokedex.png';
import style from '../styles/style.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo_pokedex" src={pokedex} alt="logo" />
      </div>
      <div className="searchbar">
        <input className="input_searchbar" type="search" placeholder="saisir nom de pokemon" />
      </div>
      <div className="langue_select">
      </div>
      <p>
        Langues
      </p>
    </div>
  );

  // Remplacer par type json
}

export default Navbar;
