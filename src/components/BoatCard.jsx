import "../styles/BoatCard.css";
import { ShopContext } from '../context/shop-context'
import { useContext } from "react";

function BoatCard(props) {

    const { id, name, price, img } = props.data
    const { addToCart, cart } = useContext(ShopContext)
    const numberOfDays = cart[id]

    return(
        
        <div className="boat-card">
            <div className="image">
                <img src="/img/boat1.jpg" alt="Boat"></img>
            </div>
            <div className="details"> 
                <p className="name"> { name } </p> 
                <p> $ { price } </p> 
            </div>
            <div className="dates-input">
                <input placeholder="Number of Days" style={{outline: 'none'}}></input>
            </div>
            <button className="add-to-cart-btn" onClick={() => addToCart (id)}> Add to cart {numberOfDays > 0 && <> | {numberOfDays} </>} </button>
        </div>
    )
}

export default BoatCard;