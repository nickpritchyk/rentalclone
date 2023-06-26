import "../styles/Navbar.css";
import { NavLink, Link } from 'react-router-dom';


function Navbar() {
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
                           
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;