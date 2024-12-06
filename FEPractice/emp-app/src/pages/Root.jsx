import { Link, Outlet } from 'react-router-dom';
import logo from '../logo.svg';

function RootLayout() {
    return (
        <>
        <header>
            <nav>
            <div>
                <img src={logo} alt='Logo'/>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
            </ul>
            </nav>
        </header>
        <Outlet/>
        </>
    );
}

export default RootLayout;