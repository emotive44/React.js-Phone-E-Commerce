import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class Product extends React.Component {
    render() {
        const { id, title, img, price, inCart } = this.props;
        return(
            <div>
                {id}
                <p>Title: {title}</p>
                <img src={img}/>
                <p>Price: {price}</p>
            </div>
        )
    }
}

export default Product;