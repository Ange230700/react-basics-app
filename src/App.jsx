import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({name: 'Bob'});
  const handleClick = () => {
    setUser({name: 'Alice'});
  }
  return (
    <>
      <p>{user.name}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App
