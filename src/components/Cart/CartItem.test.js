import React from 'react';
import CartItem from './CartItem';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('CartItem component', () => {
    test('should reder null if item or data are undefined', () => {
        const component = renderer.create(<CartItem />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})