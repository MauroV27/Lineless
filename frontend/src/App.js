import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import CartContext from './context/CartContext';
import { commerce } from './lib/Commerce';

function App() {
  const [cart, setCart] = useState();

  useEffect(() => {
    commerce.cart.retrieve()
      .then(cart => {
        setCart(cart);
      })
  }, [])

  return (
    <div className="container">
      <CartContext.Provider value={{cart, setCart}}>
        <Nav />
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="container">
          <h2>Produtos</h2>
        </div>
        <ProductList />
      </CartContext.Provider>
    </div>
  );
}

export default App;