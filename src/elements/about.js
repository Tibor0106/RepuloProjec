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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h1 className='text-uppercase'>Rólunk</h1>
                </motion.div>

            </div>
            <div className='container info'>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.25
                    }}
                >
                    <h3>Kik vagyunk mi?</h3>
                    <div className='mt-3 mb-3'>
                        <p>Üdvözöljük az EuroJet repülőgépes társaság világában!</p>
                        <p>
                            Az EuroJet büszkén áll a repülés iránti szenvedélyünkkel és az utasok iránti elkötelezettségünkkel. Az Európai égbolton tündöklő csillagként szállunk magasra,
                            hogy egyedülálló élményeket és kifogástalan szolgáltatást nyújtsunk minden utasunknak.</p>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1
                    }}
                >
                    <h3>mit kinálunk?</h3>
                    <div className='mt-3 mb-3'>
                        <ul>
                            <li>Autóbérlés</li>
                            <li>Esetleges <b>kártérítés</b> (Elveszett / sérült csomag)</li>
                            <li>Utas biztosítás</li>
                        </ul>
                    </div>


                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 2
                    }}
                >
                    <h3>miért válassz minket?</h3>
                    <ul>
                        <ul>
                            <li>
                                <b>Tapasztalat és Hozzáértés:</b> Évek óta a repülés iránti szenvedélyünk vezet bennünket, és tapasztalt csapatunk gondoskodik róla, hogy minden repülés egy különleges élmény legyen.
                            </li>
                            <li>
                                <b>Biztonság és Megbízhatóság:</b> Az utasaink biztonsága mindennél fontosabb számunkra. Modern repülőgépeinket rendszeresen karbantartjuk, hogy Ön biztonságban repülhessen.
                            </li>
                            <li>
                                <b>Személyre Szabott Szolgáltatások:</b> Minden ügyfelünk egyedi, és szolgáltatásaink is azok. Velünk repülve személyre szabott élményben lesz része.
                            </li>
                        </ul>

                    </ul>

                </motion.div>




            </div>

        </>
    );
}
export default About;
