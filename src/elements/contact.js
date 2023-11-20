import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
function Contact() {
    const email = useRef(null);
    const name = useRef(null);
    const address = useRef(null);
    const phoneNumber = useRef(null);
    const message = useRef(null);
    useEffect(() => {

        document.title = `EuroJET | Kapcsolat`;
    });
    const send = () => {
        var v_email = email.current.value;
        var v_name = name.current.value;
        var v_address = address.current.value;
        var v_phoneNumber = phoneNumber.current.value;
        var v_message = message.current.value;
        window.location = `http://eurojet.ddns.net:3500/addmessage/${v_email}/${v_name}/${v_address}/${v_phoneNumber}/${v_message}/admin`;
    }
    return (
        <>
            <Navbar />
            <div className='about'>
                <h1 className='text-uppercase'>Kacsolat</h1>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="container contact info">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="email" placeholder="Email" ref={email} />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Név" ref={name} />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <div className="input-group mb-3" />
                                    <input className="form-control" type="text" placeholder="Cím" ref={address} />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Telefonszám" ref={phoneNumber} />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <textarea className="form-control" placeholder="Írd be az üzeneted" ref={message}>
                                </textarea>
                            </div><div className="input-group mb-3">
                                <button className="btn form-control" onClick={send}>Küldés</button>
                            </div>
                        </div>
                        <div className="col-md ms-md-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.8 }}
                            >


                                <h5>Szívesen hallanánk felőled!</h5>
                                <h1>Lépj velünk kapcsolatba</h1>
                                <p>Köszönjük, hogy felkerested weboldalunkat! Ha kérdéseid, észrevételeid vagy javaslataid vannak, örömmel állunk rendelkezésedre. Kérjük, használd az alábbi elérhetőségeket, vagy töltsd ki az alábbi űrl apot, és hamarosan válaszolunk.</p>
                                <a href="">Kapcsolat</a>
                            </motion.div>
                        </div>




                    </div>
                </div>

            </motion.div>


        </>
    );
}

export default Contact;
