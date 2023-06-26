import React, { createContext, useState } from 'react'
import { BOATDATA } from '../boatData.js'


export const ShopContext = createContext(null);

function getDefaultCart() {
    let cart = {}
    for (let i = 1; i < BOATDATA.length+1; i++) {
        cart[i] = 0;
    } return cart;
}

export const ShopContextProvider = (props) => {

    const [cart, setCart] = useState(getDefaultCart());

    function addToCart(id) {
        setCart((prev) => ({...prev, [id]: prev[id]+1}))
    }

    function removeFromCart(id) {
        setCart((prev) => ({...prev, [id]: prev[id]-1}))
    }

    const contextValue = {cart, addToCart, removeFromCart, addToCart}


    return (
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
  )
}
