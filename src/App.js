import Navbar from './components/Navbar'

fetch('https://rickandmortyapi.com/api/character')

function App() {
  return (

  <>
  <Navbar brand='Rick and Morty App (React + API)'/>
    </>
  );
}

export default App;
