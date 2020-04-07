import React from 'react';
import { Link } from 'react-router-dom';
import ButtonContainer from '../styles/Button';
import { ProductContext } from '../../context';

class Details extends React.Component {
    render() {
        return(
            <ProductContext.Consumer>
                {
                    data => {
                        const {id, company, img, info, price, title, inCart } = data.detailProduct;
                        return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <img src={img} alt="phone" className="img-fluid"/>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h2>Model : {title}</h2>
                                        <h4 className="text-title text-upercase text-muted mt-3 mb-2">
                                            Made by {company}
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                Price : ${price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize mt-3 mb-1">
                                            <span className="font-weight-bold">Some information : </span>
                                            {info}
                                        </p>

                                        <div>
                                            <Link to='/'>
                                                <ButtonContainer>
                                                    Back To Products
                                                </ButtonContainer>
                                            </Link>

                                            <ButtonContainer cart 
                                                disabled={inCart ? true : false} 
                                                onClick={() => {data.addToCart(id); data.openModal(id)}}
                                            >
                                                {inCart ? 'InCart' : 'Add To Cart'}
                                            </ButtonContainer> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductContext.Consumer>
        )
    }
}

export default Details;