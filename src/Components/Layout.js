import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Layout = ({ search, setSearch }) => {
  const { width } = useWindowSize();
  return (
    <div className="App">
      <Nav
        search={search}
        setSearch={setSearch}
        title="React JS Blog"
        width={width}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
