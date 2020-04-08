import React from 'react';

const Title = ({ name, title }) => {
    if(!name || !title) { return null };
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center">
                <h1 className="text-capitalize font-weight-bold">{name}</h1>
                <h3 className="text-capitalize font-weight-bold">{title}</h3>
            </div>
        </div>
    )
}

export default Title;
