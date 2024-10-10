import Nav from "../Header/nav/Nav";
import SearchSection from "../Header/search/SearchSection";
import Footer from "../footer/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <header>
        <Nav />
        <SearchSection />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
