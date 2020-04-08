import React from 'react';
import CartTotal from './CartTotal';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('CartTotal component', () => {
    test('should reder null if data is undefined', () => {
        const component = renderer.create(<CartTotal />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})