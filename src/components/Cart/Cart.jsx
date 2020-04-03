import React, { Fragment } from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Product/Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotal from './CartTotal';

class Cart extends React.Component {
   
    render() {
      return (
        <section>
          <ProductConsumer>
            {
              data => {
                const { cart } = data;

                if(cart.length < 1) {
                    return <h1>Your Cart Is Currently Empty</h1>
                }

                return (
                    <Fragment>
                        <Title name="your" title="cart"/>
                        <CartColumns />
                        <CartList data={data} cart={cart} />
                        <CartTotal data={data} />
                    </Fragment>
                )
              }
            }
          </ProductConsumer>
        </section>
      )
    }
       
}

export default Cart;