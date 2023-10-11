import './App.css';
// import { useState } from 'react';
// import InputMessage from './components/InputMessage';
// import DisplayMessage from './components/DisplayMessage';

function App() {
  // const [message, setMessage] = useState('');
  // return (
  //   <>
  //     <InputMessage setMessage={setMessage} />
  //     <DisplayMessage message={message} />
  //   </>
  // );
  const cart = ['apple', 'banana', 'orange'];
  return (
    <div>
      <h1>shopping list</h1>
      <ul>
        {
          cart.map(
            (article, index) => (
              <li key={index}>{article}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
