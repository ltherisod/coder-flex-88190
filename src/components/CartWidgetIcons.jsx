import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "react-bootstrap";
const CartWidgetIcons = () => {
    return(
        <div>
            < MdOutlineShoppingCart fontSize={'1.3rem'} />
             <Badge bg="danger">{5}</Badge>
        </div>
    )
}

export default CartWidgetIcons