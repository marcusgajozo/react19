import { Link } from "react-router";

export const ErrorBoundary = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">page not found</p>
      <Link to="/" className="mt-4 text-blue-500">
        Go back to home
      </Link>
    </div>
  );
};
