import { ShopContext } from '../context/shop-context'
import { useContext } from "react";
import { BOATDATA } from '../boatData.js'
import CartCard from '../components/CartCard'
import '../styles/CartPage.css'
import { Link } from 'react-router-dom';

export default function CartPage(props) {
    const { cart, numItems, getTotalPrice } = useContext(ShopContext)

    console.log(numItems)
    return(
        <div className='container'>
            <h1> Your Cart ({ numItems })</h1>
            <div className="cart-page">
                <div className="cart">
                    <div className='card-deck'>
                    { BOATDATA.map((res) => {
                        if(cart[res.id] !== 0) {
                            return <CartCard data={res}></CartCard>
                        } else return null
                    })}
                    </div>
                    { (numItems) === 0 && 
                        <div className='empty-cart'>
                            <p> Your cart is empty. </p>
                            <Link style={{color: '#038aff', fontSize: 'large'}} className='empty-cart' to='/shop'> Start Shopping </Link>
                        </div>
                    }
                </div>
                <div className='cart-info'>
                    <p>  Subtotal: ${ getTotalPrice().toLocaleString() }</p>
                    <p>  Tax: ${ ((getTotalPrice())*0.18).toLocaleString() }</p>
                    <p>  Promo Code: <input placeholder='Enter promo code'></input> <button> Submit </button></p>
                    <p>  Total: ${ ((getTotalPrice())*0.18 + (getTotalPrice())).toLocaleString() }</p>
                    <button> Checkout </button>
                </div>
            </div>
        </div>
    )
}