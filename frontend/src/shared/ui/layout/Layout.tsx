import Nav from "../header/nav/Nav";
import SearchSection from "../header/search/SearchSection";
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
