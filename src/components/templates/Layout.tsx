import { Menu } from "../organisms/Menu";

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-screen">
      <Menu />
      <div className="w-full flex justify-center">{children}</div>
    </main>
  );
};
