import './App.css';
import Article from './components/Article';
import Button from './components/Button';
import { useState } from 'react';
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
  const initialCart = [
    { name: 'apple', emoji: '🍎' },
    { name: 'banana', emoji: '🍌' },
    { name: 'orange', emoji: '🍊' },
    { name: 'pear', emoji: '🍐'},
    { name: 'peach', emoji: '🍑'}
  ];
  const [cart, setCart] = useState(initialCart);
  const removeArticle = (article) => {
    setCart(cart.filter((item) => item !== article));
  };
  return (
    <div>
      <h1>shopping list</h1>
      <ul>
        {
          cart.map(
            (article) => (
              <Article
                key={article.name}
                name={article.name}
                emoji={article.emoji}
                removeArticle={removeArticle}
              />
            )
          )
        }
      </ul>
      <Button />
    </div>
  );
}

export default App;
