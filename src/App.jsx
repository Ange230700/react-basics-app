import './App.css';
import Article from './components/Article';
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
            (article, index) => (
              <Article
                key={index}
                name={article.name}
                emoji={article.emoji}
              />
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
