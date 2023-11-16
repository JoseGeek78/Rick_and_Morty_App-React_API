import Navbar from './components/Navbar'

fetch('https://rickandmortyapi.com/api/character')
   .then(response => response.json())

function App() {
  return (

  <>
  <Navbar brand='Rick and Morty App (React + API)'/>
    </>
  );
}

export default App;
