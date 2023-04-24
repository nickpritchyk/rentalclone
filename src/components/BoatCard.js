import "../styles/BoatCard.css";
import addToCart from "./Cart.js";

function BoatCard({addToCart}) {
    return(
        
        <div className="boat-card">
            <div className="image">
                <img src="/img/boat1.jpg" alt="Boat"></img>
            </div>
            <div className="boat-title">
                <h3> Boat </h3>
            </div>
            <div className="description"> 
                <p> 2021 Yacht </p> 
            </div>
            <div className="dates-input">
                <input placeholder="Number of Days" style={{outline: 'none'}}></input>
            </div>
            <div className="add-to-cart-btn">
                <button onClick={() => addToCart("2021 Yacht")}> Add to cart </button>
            </div>
        </div>
    )
}

export default BoatCard;