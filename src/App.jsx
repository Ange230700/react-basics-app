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
  const cart = [
    { name: 'apple', emoji: '🍎' },
    { name: 'banana', emoji: '🍌' },
    { name: 'orange', emoji: '🍊' },
    { name: 'pear', emoji: '🍐'},
    { name: 'peach', emoji: '🍑'}
  ];
  return (
    <div>
      <h1>shopping list</h1>
      <ul>
        {
          cart.map(
            (product, index) => (
              <li key={index}>{product.emoji} {product.name}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
