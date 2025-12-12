import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // Dispatch the Redux action
        dispatch(addToCart(product));
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