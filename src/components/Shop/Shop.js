import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [exercise, setExercise] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setExercise(data));
    }, []);

    const addToCart = (selectedExercise) => {
        let newCart = [ ...cart, selectedExercise];
        
        setCart(newCart);
    
    }

    // Adding Time.
    let totalTime = 0;
    cart.forEach(item => {
        totalTime = totalTime + item.time;
    })

    return (
        <>
            <div className='shop-container'>
                <div >
                    <div className='header'>
                        <FontAwesomeIcon style={{ fontSize: '70' }} icon={faDumbbell}></FontAwesomeIcon>
                        <h4 style={{ fontSize: '40px', marginLeft: '20px' }}>Stay Fit</h4>
                    </div>
                    <h3 style={{ marginLeft: '50px' }}>Select today's exercise.</h3>

                    <div className="product-container">
                        {
                            exercise.map(product => <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart} time={totalTime}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;