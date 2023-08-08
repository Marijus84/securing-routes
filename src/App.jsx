import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";

import PrivateRoutes from "./PrivateRoutes";
import Products from "./Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products/",
        element: <Products />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
