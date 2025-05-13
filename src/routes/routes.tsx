import { createBrowserRouter } from "react-router";
import { Layout } from "../components/templates/Layout";
import { Home } from "../pages/Home/Home";
import { LoginGoogle } from "../pages/LoginGoogle/LoginGoogle";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login-google",
        Component: LoginGoogle,
      },
    ],
  },
]);
