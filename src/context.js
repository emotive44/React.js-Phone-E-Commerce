import React from 'react';
import { storeProducts, detailProduct } from './data';

const { Consumer: ProductConsumer, Provider} = React.createContext();

class ProductProvider extends React.Component {
    state = {
        detailProduct,
        products: storeProducts
    }

    handleDetail = () => {
        console.log('hello from detail');
    }

    addToCart = (id) => {
        console.log('hello from cart', id);
    }

    render() {
        return (
            <Provider value={{
                ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ProductProvider, ProductConsumer };
