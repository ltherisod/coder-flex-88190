import '../css/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <nav className="nav-container">
            <a className="nav-link" href="">Coder Shop</a>
            <a className="nav-link" href="">Nuevos</a>
            <a className="nav-link" href="">Ofertas</a>
            <a className="nav-link" href="">Mas vendidos</a>
            <CartWidget/>
        </nav>
    )
}
export default NavBar