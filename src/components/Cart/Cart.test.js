import React from 'react';
import Cart from './Cart';
import { ProductContext } from '../../context';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

const detailProduct = {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 10,
    company: "google",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  };
  

describe('Cart component', () => {
    test('should render', () => {
        const component = renderer.create(
            <ProductContext.Provider value={{cart:[detailProduct]}}>
                <Cart />
            </ProductContext.Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})