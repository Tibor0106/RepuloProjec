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
import profile from "./pics/profile.svg";

import { TfiEmail } from "react-icons/tfi";


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


                <div className='container info'>
                    <div className='profile'>
                        <div className='d-flex justify-content-center kep'>
                            <div className="container d-flex justify-content-center profileImageRadius">
                            <img src={profile} className="profileImage" />
                            </div>
                        </div>
                        <div className='_profile'>
                            <div className='p_content mb-2'>
                                <h5 className='profile_username text-center'>{get("username")}</h5>
                                <p className='fs-3'>
                                    <TfiEmail size={"1.3em"} className='me-3' />
                                    {get("email")}
                                </p>

                            </div>
                            <div className='input-group mt-3'>
                                <button className='btn btn-primary form-control'>Ticket nyitása</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoPage;
