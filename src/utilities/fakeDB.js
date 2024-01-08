//========== Add To Local Storage =========//
const addToDb = (id) =>{

    let shoppingCart = {};

//====== get previous data from local storage ====//
    const storeCart = localStorage.getItem("shoppingCart");
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }

//====== Add quantity =======//
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
}


//========= Get stored data from local storage =========//
const getStoredCart = () =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shoppingCart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

//==== Remove Specific Cart from Local storage =====//
const removeCartFromDB = (id) =>{
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
        }
    }
};


//==== Delete ShoppingCart from Local storage =====//
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
  }


export {
    addToDb,
    getStoredCart,
    removeCartFromDB,
    deleteShoppingCart
};