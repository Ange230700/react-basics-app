import './App.css';
import { useState } from 'react';
import InputMessage from './components/InputMessage';
import DisplayMessage from './components/DisplayMessage';

function App() {
  const [message, setMessage] = useState('');
  return (
    <>
      <InputMessage setMessage={setMessage} />
      <DisplayMessage message={message} />
    </>
  );
}

export default App;
