import './App.css';

function App() {
  const handleClick = (event) => {
    console.log(event.target);
  }
  return <button onClick={handleClick}>Click</button>
}

export default App
