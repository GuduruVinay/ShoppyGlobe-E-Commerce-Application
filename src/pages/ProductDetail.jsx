import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
    // Get the dynamic ID from the URL
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Only fetch if productId is available
        if(!productId) {
            setLoading(false);
            setError("Invalid Product ID provided.");
            return;
        }

        const fetchDetail = async () => {
            setLoading(true);
            setError(null);
            const url = `https://dummyjson.com/products/${productId}`;

            try {
                const response = await fetch(url);

                if(!response.ok) {
                    throw new Error(`HTTP Error : ${response.status} - ${response.statusText}`)
                }

                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();

    }, [productId]); // Re-Run effect whenever the productId changes

    const handleAddToCart = () => {
        if(product) {
            dispatch(addToCart(product));
        }
    }

    // Render logic for Product Detail

    if(loading) {
        return (
            <div className="detail-loading">Loading product details...</div>
        )
    }

    if(error) {
        return (
            <div className="detail-error">Failed to load product details: {error}</div>
        )
    }

    // Check if product is available before trying to access its properties
    if(!product) {
        return (
            <div className="detail-not-found">Product not found.</div>
        )
    }

    return (
        <div className="product-detail-page">
            <div className="detail-content">
                <img src={product.thumbnail} alt={product.title} className="detail-image" />
                <div className="detail-info">
                    <h2>{product.title}</h2>
                    <p className="detail-description">{product.description}</p>
                    <h3>Price : ${product.price}</h3>
                    <p>Category : {product.category}</p>
                    <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;