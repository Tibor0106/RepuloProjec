import Navbar from './../elements/Navbar';
import ProfileInfo from './../elements/ProfileInfo';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import p404 from './pics/404.png'
import { motion } from 'framer-motion';
import './css/style.css';
import { Cookies, useCookies } from 'react-cookie';



function NoPage() {
    const [cookies, setCookie, removeCookie] = useCookies(['logindata']);
    useEffect(() => {
        document.title = `EuroJET | Profil`;
    });
    const get = (val) => {
        return cookies['logindata'].split('&').find(e => e.includes(val)).split('=')[1];
    } 
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className='about'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className='text-uppercase'>Profil</h1>
                </motion.div>
            <ProfileInfo username={get("username")} email={get("email")}/>
            </div>
        </>
    );
}

export default NoPage;
