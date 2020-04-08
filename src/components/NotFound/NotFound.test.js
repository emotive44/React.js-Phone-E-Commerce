import React from 'react';
import NotFound from './NotFound';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('NotFound Component', () => {
    test('should render return null if pathname is undefiend', () => {
        const component = renderer.create(<NotFound />);
        expect(component.toJSON()).toMatchSnapshot();
    })
})