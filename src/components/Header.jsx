import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    // Use a Redux selector to get the cart items array
    const cartItems = useSelector((state) => state.cart.items);
    // Calculate the total number of items
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            <nav>
                {/* Link to Home */}
                <Link to="/">
                    <h1>ShoppyGlobe</h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            Cart ({totalItems})
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;