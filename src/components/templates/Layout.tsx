import { Outlet } from "react-router";
import { Menu } from "../organisms/Menu";

export const Layout = () => {
  return (
    <main className="flex h-screen">
      <Menu />
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
    </main>
  );
};
