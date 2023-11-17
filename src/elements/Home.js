import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import SearchPanel from './SearchPanel';
import { motion } from 'framer-motion';

function Home() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        document.title = `EuroJET`;
        fetch('http://127.0.0.1:3500/destinations/admin')
            .then(response => response.json())
            .then(data => {
                setMessages(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Hiba a blog üzenetek lekérdezése közben:', error);
                setMessages([]); // Vagy más hibakezelési logika
            });

    }, []);
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
            {messages.map(i => (
                i.destinationName
            ))}
        </>
    );
}

export default Home;
