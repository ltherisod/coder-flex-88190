import '../css/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return(
        <nav className="nav-container">
            <NavLink className="nav-link" to="/">Coder Shop</NavLink>
            <NavLink className="nav-link" to="/category/nuevos">Nuevos</NavLink>
            <NavLink className="nav-link" to="/category/ofertas">Ofertas</NavLink>
            <NavLink className="nav-link" to="/category/mas vendidos">Mas vendidos</NavLink>
            <CartWidget/>
        </nav>
    )
}
export default NavBar