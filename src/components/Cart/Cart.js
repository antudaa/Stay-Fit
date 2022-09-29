import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import antu from '../../images/3d21b147-39d3-4acc-9f0d-efc2e335de62.jpg'

import React from 'react';
import './Cart.css';


// The Props Cart is a Object .
const Cart = ({cart, price, shipping, tax, grandTotal, quantity}) => {
    return (
        <div className='cart'>
            <div>
                <div className='my-info'>
                    <img style={{width: '40px' , height: '40px' , borderRadius:'50%'}} src={antu} alt="" />
                    <div>
                        <h3>Antu Das.</h3>
                        <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Ctg, Bangladesh.</p>
                    </div>
                </div>
            </div>
            <h1>Cart Items</h1>
            <p>Selected Items : {cart.length}</p>
            <p>Product Quantity : {quantity}</p>
            <p>Total Price : ${price}</p>
            <p>Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;