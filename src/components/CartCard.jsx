import "../styles/BoatCard.css";
import { ShopContext } from '../context/shop-context'
import { useContext } from "react";

function BoatCard(props) {

    const { id, name, price, img } = props.data
    const { cart, numItems, removeFromCart } = useContext(ShopContext)
    const numberOfDays = cart[id]

    return(
        
        <div className="boat-card">
            <div className="image">
                <img src="/img/boat1.jpg" alt="Boat"></img>
            </div>
            <div className="details"> 
                <p className="name"> { name } </p> 
                <p> $ { price } </p> 
                <p> Q: { numberOfDays } </p>
            </div>
            <button className="remove" onClick={() => removeFromCart (id)}> Remove </button>
        </div>
    )
}

export default BoatCard;