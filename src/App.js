import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <NotFound />
    </Fragment>
  );
}

export default App;
