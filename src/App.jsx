import './App.css';
import { useState } from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Cart from './components/Cart';
// import SayHello from './components/SayHello';

function App() {
  // const product = {
  //   name: 'iPhone',
  //   quantity: 2,
  //   price: 999
  // };

  // const calculate = (product) => {
  //   return product.quantity * product.price;
  // };

  // return (
  //   <>
  //     <Cart product={product} calculate={calculate} />
  //   </>
  // )
  // const wilder = {
  //   name: 'Wildo',
  //   languages: ['HTML', 'CSS', 'JavaScript', 'React']
  // };
  // return <SayHello wilder={wilder} />
  const state = useState();
  console.log(state);
  return <p>Hello World!</p>
}

export default App
