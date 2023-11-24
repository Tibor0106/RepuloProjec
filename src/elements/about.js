import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import p404 from './pics/404.png'
import { motion } from 'framer-motion';

function About() {
    const [about, setAbout] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        document.title = `EuroJET | Rólunk`;
        fetch('http://eurojet.ddns.net:3500/about/get/all/admin')
            .then(response => response.json())
            .then(data => {
                setAbout(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Hiba a blog üzenetek lekérdezése közben:', error);
                setAbout([]);
            });

    }, []);
    const select = (id) => {
        setActive(id);
    }
    const makekey = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
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
                    <h1 className='text-uppercase'>Rólunk</h1>
                </motion.div>

            </div>
            <div className='container info2'>
                <div className='row'>
                    <div className='col-ms col-3'>
                        <div className='_about'>
                            <ul className='aboutSide'>
                                {about.map(i => (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: about.indexOf(i) / 10 }}
                                    >
                                        {about.indexOf(i) == active ? <li className='active' onClick={event => select(about.indexOf(i))}>{i.title}</li> : <li onClick={event => select(about.indexOf(i))}>{i.title}</li>}
                                    </motion.div>

                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-md'>
                        <div className='about_info'>
                            <div className='about_title'>
                                <h3> {about.map(i => (
                                    <motion.div
                                        key={makekey(3)}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {about.indexOf(i) == active ? <p>{i.title}</p> : ""}
                                    </motion.div>

                                ))}</h3>
                            </div>
                            <div className='message'>
                                <p>

                                    {about.map(i => (
                                        <motion.div
                                            key={makekey(3)}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {about.indexOf(i) == active ? <p>{i.message}</p> : ""}
                                        </motion.div>

                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
export default About;
