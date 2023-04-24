import React, { useState } from 'react'
import BoatCard from "./BoatCard";

export default function Cart() {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const addToCart = (item) => {
        setCart([...cart, item]);
        // setTotalItems(totalItems + item.price);
        console.log("UPDATING CART: ", cart);
    }

    const removeFromCart = () => {

    }

    return(
        <div className="cart">
            Cart { cart }
        </div>
    )
}