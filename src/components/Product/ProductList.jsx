import React, { Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../../context'

class ProductList extends React.Component {
    render() {
        return(
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {(data) => {
                                    return data.products.map( product => {
                                        return <Product key={product.id} {...product} />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductList;