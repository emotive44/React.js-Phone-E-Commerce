import React from 'react';
import { storeProducts, detailProduct } from './data';

const { Consumer: ProductConsumer, Provider} = React.createContext();

class ProductProvider extends React.Component {
    state = {
        cart: [],
        products: [],
        modalProduct: [],
        detailProduct: [],
        modalOpen: false,
        cartSubTotal: 0,
        cartTotal: 0,
        cartTax: 0
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

        this.setState((prev) => ({
            products: tempProducts, 
            cart:[...prev.cart, product]
        }), () => { this.addTotals() });
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState({modalProduct: product, modalOpen: true});
    } 

    closeModal = () => {
        this.setState({modalOpen: false, modalProduct: []});
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        let selectedProduct = this.getItem(id);

        selectedProduct.count += 1;
        selectedProduct.total = selectedProduct.count * selectedProduct.price;
        this.setState({cart: [...tempCart]}, () => this.addTotals())
    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        let selectedProduct = this.getItem(id);
        
        selectedProduct.count -= 1;
        selectedProduct.total = selectedProduct.count * selectedProduct.price;
        this.setState({cart: [...tempCart]}, () => this.addTotals())
        
        if(selectedProduct.count === 0) {
            this.removeItem(id);
        }
    }

    removeItem = id => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.products];

        tempCart = tempCart.filter(product => product.id !== id);

        let productsWithResetItem = tempProducts.map(item => { 
            if(item.id === id) {
                item.inCart = false;
                item.count = 0;
                item.total = 0;
             return item;
            }
            return item;
        })
        this.setState({cart: tempCart, products: productsWithResetItem}, () => this.addTotals());
    }

    clearCart = () => {
        let products = [...this.state.products];
        products.map(item => {
            item.inCart = false;
        })
        this.setState({cart: [], products}, () => this.addTotals());
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {
            subTotal += item.total;
        });
        const tempTax = subTotal * 0.1;
        const tax  = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({cartSubTotal: subTotal, cartTax: tax, cartTotal: total});
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleDetail: this.handleDetail,
                removeItem: this.removeItem,
                increment: this.increment,
                decrement: this.decrement,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { ProductProvider, ProductConsumer };
