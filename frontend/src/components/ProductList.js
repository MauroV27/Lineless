import React, { Component } from 'react';
import ProductRow from './ProductRow';
import CartContext from '../context/CartContext';
import { commerce } from '../lib/Commerce';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(productId) {
    commerce.cart.add(productId, 1)
      .then(result => {
        this.context.setCart(result.cart);
        alert("Produto adicionado ao carrinho.");
      });
  }

  componentDidMount() {
    commerce.products.list().then((result) => {
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
      <div className="container main-content">
        {
          this.state.products.map(product => {
            return <ProductRow key={product.id} product={product} addProduct={this.handleAddProduct} />
          })
        }
      </div>
    );
  }
}

ProductList.contextType = CartContext;

export default ProductList;