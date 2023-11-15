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
            <div className='container contact'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-md'>
                                <></>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
