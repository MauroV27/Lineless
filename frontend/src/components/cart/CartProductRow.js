import React from 'react';
import { Button } from 'reactstrap';

const CartProductRow = ({ lineItem }) => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={lineItem.media.source} alt={lineItem.name} height="50" />
      </div>
      <div className="col-md-6 product-detail">
        <h5>{lineItem.name}</h5>
      </div>
      <div className="col-md-2 cart-product-count">
        <h6>{lineItem.quantity}</h6>
      </div>
      <div className="col-md-2 cart-product-price">
        {lineItem.line_total.formatted_with_symbol}
      </div>
      <Button color="danger" style={{ marginLeft: "auto", width: "200px", height: "50px",}}>
          <span className="icon-button-text-right">Remover do Carrinho</span>
      </Button>
    </div>
  );
}

export default CartProductRow;