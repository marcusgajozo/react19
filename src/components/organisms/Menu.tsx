import { NavLink } from "react-router";

export const Menu = () => {
  return (
    <aside className="w-xs bg-gray-50">
      <div className="bg-gray-200 p-4">
        <h3 className="text-2xl font-bold">Study React19</h3>
        <p className="text-sm text-gray-500">
          by{" "}
          <a
            href="https://www.linkedin.com/in/marcusgajozo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 font-semibold"
          >
            Marcus Gajozo
          </a>
        </p>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login-google" end>
          Login with Google
        </NavLink>
        <NavLink to="/config-husky-commitlint" end>
          Config Husky Commitlint
        </NavLink>
      </nav>
    </aside>
  );
};
