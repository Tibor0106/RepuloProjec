import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
function Contact() {
    useEffect(() => {

        document.title = `Kapcsolat`;
    });
    return (
        <>
            <Navbar />
            <p className='text-center'>Kapcsolat</p>
        </>
    );
}

export default Contact;
