import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get cart data and calculate totals
    const cartItems = useSelector((state) => state.cart.items);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Local state for the dummy form
    const [formData, setFormData] = useState({ name: '', email: '', address: '' });
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Place Order Logic
    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // Display "Order placed" message
        setOrderPlaced(true);

        // Empty the cart (Dispatch Redux action)
        dispatch(clearCart());

        // Redirect the user back to the Home page automatically after a delay
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    if(cartItems.length === 0) {
        if(orderPlaced) {
            return (
                <div>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your purchase.</p>
                    <p>Redirecting you to the home page...</p>
                </div>
            );
        }

        return (
            <div>
                <h2>Cannot Checkout</h2>
                <p>Your cart is empty. <Link to="/">Start Shopping</Link></p>
            </div>
        );
    }
    
    return (
        <div>
            <h2>Checkout</h2>
            <div>
                {/* Dummy Form (User Details) */}
                <div>
                    <h3>1. Shipping Information</h3>
                    <form onSubmit={handlePlaceOrder}>
                        <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <textarea name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} required />
                        <button type="submit">
                            Place Order (${subtotal.toFixed(2)})
                        </button>
                    </form>
                </div>
                {/* Order Summary */}
                <div>
                    <h3>2. Order Summary</h3>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.title} x {item.quantity}</p>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                    <hr />
                    <div>
                        <p>Subtotal : <span>${subtotal.toFixed(2)}</span></p>
                        <p>Shipping : <span>FREE</span></p>
                        <p>Total : <span>${subtotal.toFixed(2)}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;