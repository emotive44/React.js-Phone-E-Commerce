import React from 'react';
import CartList from './CartList';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('CartList component', () => {
    test('should reder null if cart is undefined', () => {
        const component = renderer.create(<CartList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})