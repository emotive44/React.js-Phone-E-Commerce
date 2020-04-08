import React from 'react';
import Product from './Product';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('Product Component', () => {
    test('should render return null if props is undefiend', () => {
        const component = renderer.create(<Product />);
        expect(component.toJSON()).toMatchSnapshot();
    })
})