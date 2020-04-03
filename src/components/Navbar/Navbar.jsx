import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import ButtonContainer from '../styles/Button';
import NavWrapper from '../styles/Navbar';

class Navbar extends React.Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    {/* I use a ul to be ready if we need more links in a future */}
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to='/store' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

export default Navbar;
