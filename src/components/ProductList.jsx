import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const API_URL = 'https://dummyjson.com/products';

function ProductList() {
    const { data: allProducts, loading, error } = useFetchProducts(API_URL);

    // Get the search term from Redux state
    const searchTerm = useSelector((state) => state.search.searchTerm);

    // Display Loading State
    if(loading) {
        return (
            <div className="loading-state">Loading products...</div>
        );
    }

    // Display Error State
    if(error) {
        return (
            <div className="error-state">
                <h2>Data Fetch Failed</h2>
                <p>There was an error loading the product list.</p>
                <p>Error details: {error}</p>
                <p>Please check the network connection or try again later.</p>
            </div>
        );
    }

    // Ensure products is an array before rendering lists
    if(!allProducts || allProducts.length === 0) {
        return (
            <div className="empty-state">No products found.</div>
        )
    }

    // Filtering Logic
    const filteredProducts = allProducts.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Rendering the List
    return (
        <div className="product-list-container">
            <h2>{searchTerm ? `Results for "${searchTerm}"` : 'Featured Products'}</h2>
            {filteredProducts.length === 0 && searchTerm ? (
                <p className="no-results">No products matched your search criteria.</p>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        // use unique key and pass product data via props
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;