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
        fetch('http://localhost:3500/about/get/all/admin')
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

    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className='about'>

            </div>
            <div className='container info2'>
                <div className='row'>
                    <div className='col-ms col-3'>
                        <div className='_about'>
                            <ul className='aboutSide'>
                                {about.map(i => (
                                    about.indexOf(i) == active ? <li className='active' onClick={event => select(about.indexOf(i))}>{i.title}</li> : <li onClick={event => select(about.indexOf(i))}>{i.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-md'>
                        <div className='about_info'>
                            <div className='about_title'>
                                <h3> {about.map(i => (
                                    about.indexOf(i) == active ? i.title : ""
                                ))}</h3>
                            </div>
                            <div className='message'>
                                <p>

                                    {about.map(i => (
                                        about.indexOf(i) == active ? i.message : ""
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
