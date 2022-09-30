// const addToCart = (selectedProduct) => {
//     let newCart = [];
//     // Searching is selectedProduct exists in Cart.
//     const exist = cart.find(product => product.id === selectedProduct.id);
//     // If not Exists.
//     if (!exist) {
//         selectedProduct.quantity = selectedProduct.time;
//         newCart = [...cart, selectedProduct];
//     } else {
//         // If Exists. First Filter all the products without selectedProduct.
//         const rest = cart.filter(product => product.id !== selectedProduct.id);
//         // Increasing Quantity .
//         exist.quantity = exist.quantity + 1;
//         newCart = [...rest, exist];
//     }

//     setCart(newCart);
//     addToDb(selectedProduct.id);

// }