import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { incrementQuanity, decrementQuantity, removeFromCart } from "../redux/cartSlice";

function CartItem() {
    const dispatch = useDispatch();

    // Event Handlers
    const handleIncrement = () => {
        dispatch(incrementQuanity(item.id));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(item.id));
    }

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    }

    const lineTotal = item.price * item.quantity;

    return (
        <div>
            <img src={item.thumnail} alt={item.title} />
            <div>
                <h4>{item.title}</h4>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <div>
                    <button onClick={handleDecrement} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleRemove}>Remove</button>
                </div>
            </div>
            <div>
                Total: **${lineTotal.toFixed(2)}**
            </div>
        </div>
    );
};

// Prop Validation
CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumnail: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
};

export default CartItem;