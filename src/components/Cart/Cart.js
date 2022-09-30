import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import antu from '../../images/3d21b147-39d3-4acc-9f0d-efc2e335de62.jpg'

import React from 'react';
import './Cart.css';


// The Props Cart is a Object .
const Cart = ({time }) => {
    return (
        <div className='cart'>
            <div className='flex'>
                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={antu} alt="" />
                <div>
                    <h3>Antu Das.</h3>
                    <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Ctg, Bangladesh.</p>
                </div>
            </div>
            <div className='flex bg'>
                <div>
                    <h3>75 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.8</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>23 <small>Years</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='flex-time'>
                <button className='btn-time'>10<small>s</small></button>
                <button className='btn-time'>20<small>s</small></button>
                <button className='btn-time'>30<small>s</small></button>
                <button className='btn-time'>40<small>s</small></button>
                <button className='btn-time'>50<small>s</small></button>
            </div>

            <div>
                <h2>Exercise Details</h2>

                <div className='flex-exercise'>
                    <h4>Exercise Time : </h4>
                    <h6>{time} <small>sec</small></h6>
                </div>
                <div className='flex-exercise'>
                    <h4>Break Time : </h4>
                    <h6>00 <small>sec</small></h6>
                </div>
            </div>

            <button className='complete-btn'>Activity Completed...</button>

            {/* <h1>Cart Items</h1>
            <p>Selected Items : {cart.length}</p>
            <p>Product Quantity : {quantity}</p>
            <p>Total Price : ${price}</p>
            <p>Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal}</h3> */}
        </div>
    );
};

export default Cart;