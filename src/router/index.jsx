import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import NotFound from '../pages/NotFound';

// Convert page imports to use React.lazy
const Home = lazy(() => import('../pages/Home'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));

// Fallback component while the chunk is loading
const LoadingFallback = () => <div>Loading page content...</div>;

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
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                // Dynamic route parameter: ':productId'
                path: 'products/:productId',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProductDetail />
                    </Suspense>
                ),
            },
            {
                path: 'cart',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: 'checkout',
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Checkout />
                    </Suspense>
                ),
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