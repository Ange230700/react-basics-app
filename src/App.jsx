// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Cart from './components/Cart';

function App() {
  const product = {
    name: 'iPhone',
    quantity: 2,
    price: 999
  };

  const calculate = (product) => {
    return product.quantity * product.price;
  };
  return (
    <>
      <Cart product={product} calculate={calculate} />
    </>
  )
}

export default App
