import React from 'react';

const CartCheckoutRow = () => {
  return (
    <div className="row">
      <div style={{display: "flex"}} className="col-md-12 text-right">
        <button style={{ marginLeft: "auto" }} className="btn btn-success" >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartCheckoutRow;