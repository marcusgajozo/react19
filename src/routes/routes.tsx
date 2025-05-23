import { createBrowserRouter } from "react-router";
import { Layout } from "../components/templates/Layout";
import { Home } from "../pages/Home/Home";
import { LoginGoogle } from "../pages/LoginGoogle/LoginGoogle";
import { ConfigHuskyCommitlint } from "../pages/ConfigHuskyCommitlint/ConfigHuskyCommitlint";
import { ErrorBoundary } from "../pages/ErrorBoundary/ErrorBoundary";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "config-husky-commitlint",
        Component: ConfigHuskyCommitlint,
      },
      {
        path: "login-google",
        children: [
          {
            index: true,
            Component: LoginGoogle,
          },
          {
            path: "public",
            Component: () => <h1>Public</h1>,
          },
          {
            // This route is protected
            // TODO: Implement loader to check if the user is authenticated
            // and redirect to the login page if not
            loader: () => console.log("Loading..."),
            children: [
              {
                path: "private",
                Component: () => <h1>Private</h1>,
              },
            ],
          },
        ],
      },
    ],
  },
]);
