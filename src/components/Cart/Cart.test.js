import React from 'react';
import Cart from './Cart';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('Cart component', () => {
    test('should render', () => {
        const component = renderer.create(<Cart />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})