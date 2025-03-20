import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import products from '../data/products';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <h1>Redux Shopping Cart</h1>
        </header>
        <main>
          <div className="products-container">
            <h2>Products</h2>
            <div className="products-grid">
              {products.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="cart-container">
            <Cart />
            <Checkout />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;