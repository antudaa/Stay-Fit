// use local storage to manage cart data
const addToDb = exerciseBreak =>{
    
    localStorage.setItem('shopping-cart', exerciseBreak);
}

const getSetTime = () => {

    let shoppingCart = {};

    // Get The Shopping Cart From LocalStorage.
    const storCart = localStorage.getItem('shopping-cart');
    if(storCart){
        shoppingCart = JSON.parse(storCart);
    }
    return shoppingCart;
}

export {
    addToDb, 
    getSetTime
}