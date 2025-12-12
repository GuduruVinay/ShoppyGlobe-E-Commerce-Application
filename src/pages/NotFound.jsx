import { Link, useRouteError } from "react-router-dom";

function NotFound() {
    // Use useRouteError to display specific router errors if available
    const error = useRouteError();

    return (
        <div className="not-found-page">
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you were looking for does not exist.</p>
            {/* Display proper error details on the UI */}
            {error && (
                <div>
                    <p>
                        **Error Detail :** *{error.statusText || error.message}*
                    </p>
                </div>
            )}
            <p>
                <Link to="/">Go back to the Home page</Link>
            </p>
        </div>
    );
};

export default NotFound;