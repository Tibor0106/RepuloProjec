import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import SearchPanel from './SearchPanel';
import { motion } from 'framer-motion';

function Home() {
    useEffect(() => {
        document.title = `EuroJET`;
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
                    <h1 className='text-uppercase'>EuroJET</h1>
                </motion.div>
            </div>
            <div className='container info'>
                <SearchPanel />
            </div>
        </>
    );
}

export default Home;
