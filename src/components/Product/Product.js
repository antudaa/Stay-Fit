import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const { name, time, img, age} = product;
    
    return (
        <div className='product-cart'>
            <img src={img?img:"Image Not Available."} alt="This Product is Out of Stock ." />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>For Age: {age}Years</p>
                <p><small>Time Required : {time} sec</small></p>
            </div>
            <button onClick={() => addToCart(product)} className='cart-btn'>
                <p>Add To List...</p>
            </button>
        </div>
    );
};

export default Product;