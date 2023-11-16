import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import p404 from './pics/404.png'
import { color } from 'framer-motion';


function NoPage() {
    useEffect(() => {
        document.title = `EuroJET | 404`;
    });
    return (
        <>
            <header>
                <Navbar />
            </header>
            <h3 className='text-center mt-5 p404 mt-5 mb-3'>A keresett oldal nem található!</h3>
            <div className='mt-5 d-flex justify-content-center'>
                <img src={p404} className='p404img' />
            </div>

        </>
    );
}

export default NoPage;
