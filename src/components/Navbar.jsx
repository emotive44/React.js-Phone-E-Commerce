import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import ButtonContainer from './styles/Button';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}

export default Navbar;
