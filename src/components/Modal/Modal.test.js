import React from 'react';
import Modal from './Modal';
import { ProductContext } from '../../context';
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
    Link: 'Link'
}));

describe('Modal Component', () => {
    test('should render null if data is undefiend', () => {
        const component = renderer.create(<Modal />);
        expect(component.toJSON()).toMatchSnapshot();
    })

    test('should render null if modalOpen is false', () => {
        const component = renderer.create(
            <ProductContext.Provider value={{modalOpen:false, modalProduct: []}}>
                <Modal />
            </ProductContext.Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    })

    
    test('should render null if modalProduct is undefined', () => {
        const component = renderer.create(
            <ProductContext.Provider value={{modalOpen:false}}>
                <Modal />
            </ProductContext.Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    })
})