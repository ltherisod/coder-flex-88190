import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidgetIcons = () => {
    const {cart}= useContext(CartContext)
    console.log(cart)
    return(
        <div>
            < MdOutlineShoppingCart fontSize={'1.3rem'} />
             <Badge bg="danger">{5}</Badge>
        </div>
    )
}

export default CartWidgetIcons