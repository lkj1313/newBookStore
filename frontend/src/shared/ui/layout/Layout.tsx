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
      <main className="h-full w-full mb-60">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
