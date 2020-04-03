import styled from 'styled-components';

const ModalContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);

    #modal {
        background: var(--mainWhite);
        border-radius: 1rem;
    }  
    .exit {
        position: absolute;
        top:0;
        right: 0;
        background: var(--mainYellow);
        border: none;
        outline: none;
        transition: all 0.6s linear;
        padding: 0 0.5rem;
        border-radius: 0 0.5rem 0 0 ;
        font-size: 2rem;
    }
    
    .exit:hover {
        background: var(--lightBlue);
        color: var(--mainDark)
    }
`;

export default ModalContainer;
