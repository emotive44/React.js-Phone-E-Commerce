import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

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
                    <button>
                        <i className="fas fa-cart-plus" />
                        My cart
                    </button>
                </Link>
            </nav>
        )
    }
}

export default Navbar;
