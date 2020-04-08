import React from 'react';
import Title from './Title';
import renderer from 'react-test-renderer';

describe('Title component', () => {
    test('should render undefiend if name or title is undefiend', () => {
        const component = renderer.create(<Title />);
        expect(component.toJSON()).toMatchSnapshot();
    })

    test('should render correct passed name and title', () => {
        const component = renderer.create(<Title name='some Name' title='some Title'/>);
        expect(component.toJSON()).toMatchSnapshot(`
            <div
            className="row"
            >
                <div
                    className="col-10 mx-auto my-2 text-center"
                >
                    <h1
                    className="text-capitalize font-weight-bold"
                    >
                    some Name
                    </h1>
                    <h3
                    className="text-capitalize font-weight-bold"
                    >
                    some Title
                    </h3>
                </div>
            </div>
        `);
    })
}) 