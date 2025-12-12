import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

function Header() {
    const dispatch = useDispatch();
    // Use a Redux selector to get the cart items array
    const cartItems = useSelector((state) => state.cart.items);
    // Get current search term
    const searchTerm = useSelector((state) => state.search.searchTerm);
    // Calculate the total number of items
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleSearchChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <header className="app-header">
            <nav className="header-nav">
                {/* Link to Home */}
                <Link to="/">
                    <h1 className="logo">ShoppyGlobe</h1>
                </Link>
                <div className="search-bar">
                    <input 
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* Link to Cart with dynamic count */}
                        <Link to="/cart" className="cart-link">
                            Cart ({totalItems})
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;