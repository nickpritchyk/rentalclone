import React, { useState } from "react";
import 'react-multi-carousel/lib/styles.css';
import "../styles/Home.css";
import BoatCard from "../components/BoatCard";
import { NavLink, Link } from 'react-router-dom';

export default function Home() {

    return (
        <div className="home-div">
            <div className="home-jumbo">
                <h1 className="jumbo-header">
                    Sail away today with StarboardRentals.
                </h1>
                <div className="jumbo-btns">
                    <div className='btn-hover'>
                        <Link to="/rent" className={"jumbo-btn"}>
                            Rent
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