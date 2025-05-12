import { Menu } from "../organisms/Menu";

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};
