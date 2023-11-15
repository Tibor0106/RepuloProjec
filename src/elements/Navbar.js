import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../logo.svg';
import { useEffect, useState } from 'react';

function App() {
    const navList = [new Page("Home", ""), new Page("Kapcsolat", "/contact")];
    const [active, setActive] = useState("");
    const navItems = [];

    useEffect(() => {
        navList.forEach((page, index) => {
            navItems.push(<NavItem key={index} isActive={page.name === active} name={page.name} path={page.pagePath} />);
        });
    }, [active]);

    return (
        <>
            {nav(active, navItems)}
        </>
    );
}

class Page {
    constructor(name, pagePath) {
        this.name = name;
        this.pagePath = pagePath;
    }
}

const nav = (active, navItems) => {
    return (
        <>
            <nav className='customNav'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={logo} className='img-fluid' alt="Logo" />
                        </div>
                        <div className='col-md'>
                            <div className='d-flex'>
                                {navItems}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

const NavItem = ({ isActive, name, path }) => {
    return (
        <p className={isActive ? 'active' : ''}>{name}</p>
    );
};

export default App;
