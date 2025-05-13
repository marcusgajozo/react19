import { Outlet } from "react-router";
import { Menu } from "../organisms/Menu";

export const Layout = () => {
  return (
    <main className="flex h-screen">
      <Menu />
      <div className="w-full p-4 overflow-auto">
        <Outlet />
      </div>
    </main>
  );
};
