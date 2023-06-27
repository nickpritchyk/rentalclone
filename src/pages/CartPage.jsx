import { ShopContext } from '../context/shop-context'
import { useContext } from "react";
import { BOATDATA } from '../boatData.js'
import CartCard from '../components/CartCard'

export default function CartPage(props) {
    const { cart, numItems, removeFromCart } = useContext(ShopContext)

    return(
        <div className="Cart">
            <div className='card-deck'>
            { BOATDATA.map((res) => {
                if(cart[res.id] != 0) {
                    return <CartCard data={res}></CartCard>
                }
            })}
            </div>
        </div>
    )
}