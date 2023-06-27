import "../styles/CartCard.css"
import { ShopContext } from '../context/shop-context'
import { useContext } from "react"

function BoatCard(props) {

    const { id, name, price, img } = props.data
    const { cart, removeFromCart } = useContext(ShopContext)
    const numberOfDays = cart[id]

    return(
        
        <div className="card">
            <div className="image">
                <img src="/img/boat1.jpg" alt="Boat"></img>
            </div>
            <div className="details"> 
                <p id="name"> { name } </p> 
                <p id="price"> $ { price } </p> 
                <p id="quantity"> Q: { numberOfDays } </p>
            </div>
            <button className="remove" onClick={() => removeFromCart (id)}> Remove </button>
        </div>
    )
}

export default BoatCard;