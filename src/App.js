import React from 'react';
import Cart from './Cart'
import './App.css';

  const cartItems=[
  {id:1, name:'Nachos', price:2.99, qty:2},
  {id:2, name:'Sour Cream', price:3.99, qty:1},
  {id:3, name:'Hershey Cakes', price:3.69, qty:2},
  ]
function App() {


  return (
    <div className="App">
      <Cart initialItems={cartItems}/>
    </div>
  );
}

export default App;
