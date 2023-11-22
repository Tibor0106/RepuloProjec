import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import p404 from './pics/404.png'
import { motion } from 'framer-motion';

function About() {
    useEffect(() => {
        document.title = `EuroJET | Rólunk`;
    });
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
                                <li>Mit kínálunk?</li>
                            </ul>
                            <ul className='aboutSide'>
                                <li className='active'>Kik vagyunk mi?</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md'>
                        <div className='about_info'>
                            <div className='about_title'>
                                <h3>Kik vagyunk mi?</h3>
                            </div>
                            <div className='message'>
                                <p>
                                    Üdvözöljük az EuroJet repülőgépes társaság Európában!<br />

                                    Az EuroJet büszkén áll a repülés iránti szenvedélyünkkel és az utasok iránti elkötelezettségünkkel. Az Európai égbolton tündöklő csillagként szállunk magasra, hogy egyedülálló élményeket és kifogástalan szolgáltatást nyújtsunk minden utasunknak.
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
