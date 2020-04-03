import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import ProductWrapper from './ProductWrapper';

class Product extends React.Component {
    render() {
        const { id, title, img, price, inCart } = this.props;
        return(
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {
                            data => (
                                <div className="img-container p-5" onClick={() => data.handleDetail(id)}>
                                    <Link to='/details'>
                                        <img src={img} alt="phone" className="card-img-top mb-3"/>
                                    </Link>
                                    
                                    <button className="cart-btn" 
                                        disabled={inCart ? true : false} 
                                        onClick={() => {data.addToCart(id); data.openModal(id) }}
                                    >
                                        {inCart
                                            ? (<p className="text-capitalize mb-0" disabled>in inCart</p>)
                                            : (<i className="fas fa-cart-plus"/>)
                                        }
                                    </button>
                                </div>
                            )
                        }
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">${price}</h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

export default Product;