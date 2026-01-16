import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
const CartWidgetRI = ()=> {
    return(
        <div>
            <FaShoppingCart fontSize={'1.5rem'} />
            <Badge bg="danger">10</Badge>
        </div>
    )
}
export default CartWidgetRI