import Footer from "../footer/Footer";
import Nav from "../header/nav/Nav";
import SearchSection from "../header/search/SearchSection";

const Layout = ({ children }: any) => {
  return (
    <>
      <header className="">
        <Nav />
        <SearchSection />
      </header>
      <main className="h-full w-full mb-60 p-3 ">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
