import React from 'react';

export default function CartItem({ item, data }) {
    if(!item || !data) { return null }
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = data;
    return (
        <div className="row text-capitalize text-center my-2">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" style={{width: '5rem', height:'5rem'}} className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-3">
                <span className="d-lg-none">Product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-3">
                <span className="d-lg-none">Price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-3 y-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-3">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-3">
                <strong>Item Total : ${total}</strong>
            </div>
        </div>
    )
}