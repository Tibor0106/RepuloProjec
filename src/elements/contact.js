import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
function Contact() {
    useEffect(() => {

        document.title = `Kapcsolat`;
    });
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="container contact">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Név" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm">
                                    <div className="input-group mb-3" />
                                    <input className="form-control" type="text" placeholder="Cím" />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Telefonszám" />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <textarea className="form-control" placeholder="Írd be az üzeneted">
                                </textarea>
                            </div><div className="input-group mb-3">
                                <button className="btn form-control">Küldés</button>
                            </div>
                        </div>

                        <div className="col-md ms-md-5">
                            <h5>Szívesen hallanánk felőled!</h5>
                            <h1>Lépj velünk kapcsolatba</h1>
                            <p>Köszönjük, hogy felkerested weboldalunkat! Ha kérdéseid, észrevételeid vagy javaslataid vannak, örömmel állunk rendelkezésedre. Kérjük, használd az alábbi elérhetőségeket, vagy töltsd ki az alábbi űrl apot, és hamarosan válaszolunk.</p>
                            <a href="">Kapcsolat</a>
                        </div>
                    </div>
                </div>

            </motion.div>


        </>
    );
}

export default Contact;
