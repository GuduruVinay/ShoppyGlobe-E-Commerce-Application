import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    // Get the dynamic ID from the URL
    const { productId } = useParams();
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
                    throw new Error(`HTTP ErrorL ${response.status} - ${response.statusText}`)
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

    // Render logic for Product Detail

    if(loading) {
        return (
            <div>Loading product details...</div>
        )
    }

    if(error) {
        return (
            <div>Failed to load product details: {error}</div>
        )
    }

    // Check if product is available before trying to access its properties
    if(!product) {
        return (
            <div>Product not found.</div>
        )
    }

    return (
        <div>
            <h2>{ProductDetail.title}</h2>
            <img src={product.thumbnail} alt={product.title} style={{ width: '300px' }} />
            <p>{product.description}</p>
            <h3>Price : ${product.price}</h3>
            <p>Category : {product.category}</p>
        </div>
    );
};

export default ProductDetail;