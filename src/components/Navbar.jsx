import "../styles/Navbar.css";
import { NavLink, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '../context/shop-context'
import { useContext } from "react";


function Navbar() {

    const { numItems } = useContext(ShopContext)

    return(
        <header>
            <nav className="nav">
                <Link to="/" className="site-title"> StarboardRentals </Link>
                <ul>
                    <li>
                        <NavLink to="/shop"> Shop </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"> About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"> 
                           <ShoppingCartIcon style={{fontSize: '32px'}}></ShoppingCartIcon>
                           <p> { numItems } </p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;