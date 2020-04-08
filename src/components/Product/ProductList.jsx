import React, { Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../../context'

class ProductList extends React.Component {
    render() {
        return(
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductContext.Consumer>
                                {(data) => {
                                    if(!data) { return null }
                                    return data.products.map( product => {
                                        return <Product key={product.id} {...product} />
                                    });
                                }}
                            </ProductContext.Consumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductList;