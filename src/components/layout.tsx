import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
