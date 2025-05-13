import { NavLink } from "react-router";

export const Menu = () => {
  return (
    <aside className="w-xs bg-gray-50">
      <nav>
        <NavLink to="/login-google" end>
          Login with Google
        </NavLink>
        <li>Login with Github</li>
        <li>Login with Discord</li>
      </nav>
    </aside>
  );
};
