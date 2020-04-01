import React from 'react';
import { storeProducts, detailProduct } from './data';

const { Consumer: ProductConsumer, Provider} = React.createContext();

class ProductProvider extends React.Component {
    state = {
        cart: [],
        products: [],
        modalProduct: [],
        modalOpen: false,
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
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;

        this.setState((prev) => ({products: tempProducts, cart:[...prev.cart, product]}));
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState({modalProduct: product, modalOpen: true});
    } 

    closeModal = () => {
        this.setState({modalOpen: false, modalProduct: []});
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ProductProvider, ProductConsumer };
