import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
const CartWidgetRI = ()=> {
    const {cartQuantity, cart} = useContext(CartContext)
    return(
        <div>
            <FaShoppingCart fontSize={'1.5rem'} />
           {cart.length> 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidgetRI