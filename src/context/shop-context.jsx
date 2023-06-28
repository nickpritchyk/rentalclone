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
    // const [totalPrice, setTotalPrice] = useState(0.0)

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (const item in cart) {
          if (cart[item] > 0) {
            let itemInfo = BOATDATA.find((product) => product.id === Number(item));
            totalPrice += cart[item] * itemInfo.price;
          }
        }
        return totalPrice;
      };

    function addToCart(id) {
        setCart((prev) => ({...prev, [id]: prev[id]+1}))
        setNumItems((prev) => prev+1)
    }

    function removeFromCart(id) {
        setCart((prev) => ({...prev, [id]: prev[id]-1}))
        setNumItems((prev) => prev-1)
    }

    const contextValue = {cart, addToCart, removeFromCart, numItems, getTotalPrice}


    return (
    <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
  )
}
