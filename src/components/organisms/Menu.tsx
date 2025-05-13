import { NavLink } from "react-router";

export const Menu = () => {
  return (
    <aside className="w-xs bg-gray-50">
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
