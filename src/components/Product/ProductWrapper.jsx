import styled from 'styled-components';

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 0.8s linear;
    }
    .card-footer {
        background: transparent;
        transition: all 0.8s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 5px 10px 0px rgba(0,0,0,0.2);
        }
        .card-footer { 
            background: rgba(247, 247, 247);
        }
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
        transition: all 0.8s linear;
    }

    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        border: none;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        color: var(--mainWhite);
        border-radius: 0.5rem 0 0 0;
        font-size 1.5rem;
        transform: translate(100%, 100%);
        transition: all 0.8s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0,0);
        outline: none;
    }
    .cart-btn:hover {
        color: var(--mainBlue);
    }
`;

export default ProductWrapper;
