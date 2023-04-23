import "../styles/Navbar.css";
import { NavLink, Link } from 'react-router-dom';
import Cart from './Cart.js';


function Navbar() {
    return(
        <header>
            <nav className="nav">
                <Link to="/" className="site-title"> StarboardRentals </Link>
                <ul>
                    <li>
                        <NavLink to="/rent"> Rent </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"> About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"> 
                            { Cart }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;