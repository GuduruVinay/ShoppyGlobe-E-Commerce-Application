import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const API_URL = 'https://dummyjson.com/products';

function ProductList() {
    const { data: products, loading, error } = useFetchProducts(API_URL);

    // Display Loading State
    if(loading) {
        return (
            <div>Loading products... Please wait.</div>
        )
    }

    // Display Error State
    if(error) {
        return (
            <div>
                <h2>Data Fetch Failed</h2>
                <p>There was an error loading the product list.</p>
                <p>Error details: {error}</p>
                <p>Please check the network connection or try again later.</p>
            </div>
        )
    }

    // Ensure products is an array before rendering lists
    if(!products || products.length === 0) {
        return (
            <div>No products found.</div>
        )
    }

    // Rendering the List
    return (
        <div>
            <h2>Featured Products</h2>
            <div>
                {products.map((product) => (
                    // use unique key and pass product data via props
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;