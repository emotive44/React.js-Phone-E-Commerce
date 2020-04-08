import React from 'react';
import ProductList from './ProductList';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('ProductList Component', () => {
    test('should render return null if products is undefiend', () => {
        const component = renderer.create(<ProductList />);
        expect(component.toJSON()).toMatchSnapshot();
    })
})