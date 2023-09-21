import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => (
    <div className="Layout">
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
    </div>
);

export default Layout;