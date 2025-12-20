import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementQuanity, decrementQuantity, removeFromCart } from "../redux/cartSlice";
import Toast from "./Toast";

function CartItem({ item }) {
    const dispatch = useDispatch();

    const [toasts, setToasts] = useState([]);
    
    const addToast = (message, type) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }

    // Event Handlers
    const handleIncrement = () => {
        dispatch(incrementQuanity(item.id));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(item.id));
    };

    const handleRemove = () => {
        addToast('Item successfully removed from cart!', 'removed');
        dispatch(removeFromCart(item.id));
    };

    const lineTotal = item.price * item.quantity;

    return (
        <div className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
                <h4>{item.title}</h4>
                <p>Unit Price : ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                    <button onClick={handleDecrement} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleRemove} className="remove-btn">Remove</button>
                </div>
            </div>
            
            <div className="item-total">
                Total : ${lineTotal.toFixed(2)}
            </div>

            <div className="toast-container">
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        {...toast}
                        removeToast={removeToast} 
                    />
                ))}
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