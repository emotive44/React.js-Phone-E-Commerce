import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import ButtonContainer from './styles/Button';
import { Link } from 'react-router-dom';

class Modal extends React.Component {
    render() {
        return (
            <ProductConsumer>
                {
                    data => {
                        const { modalOpen, closeModal } = data;
                        const { img, title, price } = data.modalProduct;
                        console.log(data.modalProduct)
                        if(!modalOpen) { return null };
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>item added to the cart</h5>
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
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    backgroung: rgba(0, 0, 0, 0.3);
    #modal {
        background: var(--mainWhite);
    }
`;

export default Modal;
