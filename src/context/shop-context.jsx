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
    const [numItems, setNumItems] = useState(0);

    // console.log(numItems)

    function addToCart(id) {
        setCart((prev) => ({...prev, [id]: prev[id]+1}))
        setNumItems((prev) => prev+1)
    }

    function removeFromCart(id) {
        setCart((prev) => ({...prev, [id]: prev[id]-1}))
        setNumItems((prev) => prev-1)
    }

    const contextValue = {cart, addToCart, removeFromCart, addToCart, numItems}


    return (
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
  )
}
