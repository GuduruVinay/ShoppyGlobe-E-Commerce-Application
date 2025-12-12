import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    // RouterProvider makes the routing available to the whole application
    <RouterProvider router={router} />
  );
}

export default App;
