import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../logo.svg';
import { useEffect, useState, } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
    const navList = [new Page("Home", "/", 0), new Page("Kapcsolat", "/contact", 1), new Page("Rólunk", "/about", 2)];
    const loc = useLocation();
    return (
        <>
            {nav(navList, loc)}
        </>
    );
}

class Page {
    constructor(name, pagePath, id) {
        this.name = name;
        this.pagePath = pagePath;
        this.id = id;
    }
}

const nav = (navItems, loc) => {
    return (
        <>
            <nav className='customNav'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={logo} className='img-fluid logo d-md-block d-none' alt="Logo" />
                        </div>
                        <div className='col-md'>
                            <div className='d-flex navItems'>
                                <motion.div
                                    animate={{ x: 100 }}
                                    transition={{ delay: 1 }}
                                />
                                {navItems.map(i =>

                                    <NavItem key={"as"} isActive={i.pagePath == loc.pathname ? true : false} path={i.pagePath} id={i.id} name={i.name}></NavItem>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

const NavItem = ({ isActive, name, id, path }) => {
    return (
        <>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    x: 100
                }}
                exit={{ opacity: 0 }}
                transition={{
                    delay: id / 5,
                    type: "spring", stiffness: 100
                }}
            >
                <Link to={path} className={isActive ? 'active ms-5' : 'ms-5'} >{name}</Link>
            </motion.p>

        </>

    );
};

export default App;
