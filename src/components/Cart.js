import React, { useState } from 'react'

export default function Cart() {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    return(
        <div className="cart">
            Cart { totalItems }
        </div>
    )
}