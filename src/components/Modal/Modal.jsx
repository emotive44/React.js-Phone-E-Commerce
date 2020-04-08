import React from 'react';
import { ProductContext } from '../../context';
import ModalContainer from './ModalContainer';
import ButtonContainer from '../styles/Button';
import { Link } from 'react-router-dom';

class Modal extends React.Component {
    render() {
        return (
            <ProductContext.Consumer>
                {
                    data => {
                        if(!data || !data.modalProduct) { return null }
                        const { modalOpen, closeModal } = data;
                        const { img, title, price } = data.modalProduct;
                        if(!modalOpen) { return null };
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize ">
                                            <h5>item added to the cart</h5>
                                            <button className="exit" onClick={closeModal}>X</button>
                                            <img src={img} alt="phone" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Price : ${price}</h5>
                                            <Link to='/'>
                                                <ButtonContainer onClick={closeModal}>
                                                    Continue Shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to='/store'>
                                                <ButtonContainer cart onClick={closeModal}>
                                                    Go To Cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }
            </ProductContext.Consumer>
        )
    }
}

export default Modal;
