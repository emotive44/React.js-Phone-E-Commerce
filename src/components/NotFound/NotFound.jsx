import React from 'react';
import ButtonWrapper from '../styles/Button'
import ButtonContainer from '../styles/Button';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-capitalize pt-5">
                        <h1 className="display-3">404</h1>
                        <h2>Error</h2>
                        <h2>Page not found</h2>
                        <h3>
                            teh requested URL &nbsp;
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>
                            &nbsp; was not found
                        </h3>
                        <ButtonContainer>
                            <Link to='/' style={{"text-decoration": "none"}}>
                                {'<-- Go Back To Home Page'}
                            </Link>
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;