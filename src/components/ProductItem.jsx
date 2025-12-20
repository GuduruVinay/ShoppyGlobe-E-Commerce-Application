import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Toast from "./Toast";

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const [toasts, setToasts] = useState([]);

    const addToast = (message, type) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }

    const handleAddToCart = () => {
        // Dispatch the Redux action
        dispatch(addToCart(product));
        addToast('Item successfully added to cart!', 'added');
    };

    return (
        <div className="product-item">
            <Link to={`/products/${product.id}`}>
                {/* Lazy loading for images */}
                <img src={product.thumbnail} alt={product.title} loading="lazy" />
                <h3>{product.title}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
            </Link>

            <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart
            </button>

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
ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductItem;