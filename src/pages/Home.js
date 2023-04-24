import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "../styles/Home.css";
import BoatCard from "../components/BoatCard";

export default function Home() {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const addToCart = (item) => {
        setCart([...cart, item]);
        // setTotalItems(totalItems + item.price);
        console.log("UPDATING CART: ", cart);
    }

    const removeFromCart = () => {

    }



    return (
        <div className="home-div">
            <div className="home-jumbo">
                <h1 className="jumbo-header">
                    Sail away today with StarboardRentals.
                </h1>
            </div>
            <div className="card-deck">
                <div className="boat-cards">
                    <BoatCard addToCart={addToCart} />
                </div>
            </div>
        </div>
    )
}