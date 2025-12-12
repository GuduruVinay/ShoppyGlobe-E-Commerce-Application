import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate Subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    if(cartItems.length === 0) {
        return (
            <div>
                <h2>Your Cart is Empty</h2>
                <p>Time to go shopping!</p>
                <Link to="/">Go to Products</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            <div>
                <div>
                    {cartItems.map((item) => (
                        // Use unique key and pass item data via props
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div>
                    <h3>Order Summary</h3>
                    <p>Subtotal ({cartItems.length} items) : **${subtotal.toFixed(2)}**</p>
                    <p>Shipping: FREE</p>
                    <hr />
                    <h4>Total: ${subtotal.toFixed(2)}</h4>

                    <Link to="/checkout">Proceed to Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;