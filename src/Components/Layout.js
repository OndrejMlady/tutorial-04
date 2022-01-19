import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Nav search={search} setSearch={setSearch} title="React JS Blog"/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
