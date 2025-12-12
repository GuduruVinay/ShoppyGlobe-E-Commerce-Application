import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
    return (
        <>
            <Header />
            <main>
                {/* The Outlet renders the component for the current route (e.g., Home, Cart)*/}
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;