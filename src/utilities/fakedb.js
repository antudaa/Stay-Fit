// use local storage to manage cart data
const addToDb = exercise =>{
    let shoppingCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const time = shoppingCart[exercise.id];
    if(time){
        const newTime = time + exercise.time;
        // shoppingCart[exercise.id] = newTime;
        shoppingCart.push(newTime);
    }
    else{
        // shoppingCart[exercise.id] = exercise.time;
        shoppingCart.push(exercise.time);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {

    let shoppingCart = {};

    // Get The Shopping Cart From LocalStorage.
    const storCart = localStorage.getItem('shopping-cart');
    if(storCart){
        shoppingCart = JSON.parse(storCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

const setTime = () => {
    const timeArray = getStoredCart();
    return console.log(timeArray);
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteShoppingCart,
    setTime
}