import './styles/App.css';
import Navbar from './composants/header';
import Pokemons from './composants/sectionpokemon';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Pokemons />
    </div>
  );
}

export default App;
