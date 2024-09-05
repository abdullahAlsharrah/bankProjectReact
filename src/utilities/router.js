import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Auth from "../components/Auth";
import Main from "../components/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Transaction from "../pages/Transaction";
import Users from "../pages/Users";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/transactions",
            element: <Transaction />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Auth />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
