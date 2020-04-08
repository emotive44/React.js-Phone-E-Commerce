import React from 'react';
import Navbar from './Navbar';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('Navbar component', () => {
    test('should reder correctly', () => {
        const component = renderer.create(<Navbar />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})