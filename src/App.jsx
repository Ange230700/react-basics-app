// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Cart from './components/Cart';
import SayHello from './components/SayHello';

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
  return <SayHello name="Wilder" age={22}/>
}

export default App
