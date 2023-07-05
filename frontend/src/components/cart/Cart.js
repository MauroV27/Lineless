import React, { useContext } from 'react';
import CartProductList from './CartProductList';
import CartCheckoutRow from './CartCheckoutRow';
import CartTotalRow from './CartTotalRow';
import CartContext from '../../context/CartContext';

const Cart = ({product, removeProduct}) => {
  const { cart } = useContext(CartContext);

  if (cart &&  cart.total_unique_items > 0) {
    return (
      <div className="container cart">
        <CartProductList cart={cart} />
        <CartTotalRow cart={cart} />
        <CartCheckoutRow />
      </div>
    );
  }

  return (
    <div className="container cart">
      <p>O carrinho está vazio.</p>
    </div>
  )
}

export default Cart;