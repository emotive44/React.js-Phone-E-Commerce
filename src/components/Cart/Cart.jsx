import React, { Fragment, useContext } from 'react';
import { ProductContext } from '../../context';
import Title from '../Product/Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';

const Cart = () =>  {
  const productContext = useContext(ProductContext);
  if(!productContext) { return null }
  
    return (
      <section>
        {
          productContext.cart.length
          ? (
            <Fragment>
                  <Title name="your" title="cart"/>
                  <CartColumns />
                  <CartList data={productContext} cart={productContext.cart} />
                  <CartTotal data={productContext} />
              </Fragment>
          )
          : (<h1>Your Cart Is Currently Empty</h1>)
        }
      </section>
    ) 
}

export default Cart;