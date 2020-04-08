import React from 'react';
import Details from './Details';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('Details Component', () => {
    test('should render correctly', () => {
        const component = renderer.create(<Details />);
        expect(component.toJSON()).toMatchSnapshot(); 
    });
});