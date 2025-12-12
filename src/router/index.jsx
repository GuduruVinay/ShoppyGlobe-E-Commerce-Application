import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";

// Import all page components
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';

// Define the router configuration
const router = createBrowserRouter([
    {
        path: '/',
        // The main layout wraps all children
        element: <RootLayout />,
        // Catch top-level errors
        errorElement: <NotFound />,
        children: [
            {
                // This makes the Home component the default child for '/'
                index: true,
                element: <Home />,
            },
            {
                // Dynamic route parameter: ':productId'
                path: 'products/:productId',
                element: <ProductDetail />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'checkout',
                element: <Checkout />,
            },
        ],
    },
    // Catch all route for paths not matched by the main layout
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;