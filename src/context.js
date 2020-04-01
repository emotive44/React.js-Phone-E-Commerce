import React from 'react';
import { storeProducts, detailProduct } from './data';

const { Consumer: ProductConsumer, Provider} = React.createContext();

class ProductProvider extends React.Component {
    state = {
        products: [],
        detailProduct: []
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products = [];
        storeProducts.map(item => {
            const singleItem = {...item};
            products = [...products, singleItem];
        });
        this.setState({products})
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({detailProduct: product})
    }

    addToCart = (id) => {
       
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
