import React from "react";
import 'react-multi-carousel/lib/styles.css';
import "../styles/Home.css";
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className="home-div">
            <div className="home-jumbo">
                <h1 className="jumbo-header">
                    Sail away today with StarboardRentals.
                </h1>
                <div className="jumbo-btns">
                    <div className='btn-hover'>
                        <Link to="/shop" className={"jumbo-btn"}>
                            Shop
                        </Link>
                    </div>
                    <div className='btn-hover'>
                        <Link to="/about" className={"jumbo-btn"}>
                            About us 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}