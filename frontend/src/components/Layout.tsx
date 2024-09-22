import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout(): ReactElement {
    return (
        <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/health-check">Health Check</Link></li>
            </ul>
        </nav>
        <Outlet />
        </div>
    );
};

export default Layout;