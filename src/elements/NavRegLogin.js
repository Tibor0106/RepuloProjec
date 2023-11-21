import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $, { event } from 'jquery';
import { useEffect, useState } from 'react';
import p404 from './pics/404.png'
import { color } from 'framer-motion';
import Popup from './Popup';
import "./css/style.css";


function LoginReg() {
    const [loginPopup, setLoginPopup] = useState(null);
    const [registerPopup, setRegisterPopup] = useState(null);
    const makekey = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const openPopup = (value) => {
        if (value == "login") {
            setLoginPopup(<Popup key={makekey(4)} title={"Bejelentkezés"} Content={loginContent} />)
        } else {
            setRegisterPopup(<Popup key={makekey(4)} title={"Regisztáció"} Content={regContent} />)
        }

    }

    const loginContent = () => {
        return (
            <>
                <p className='text-center fs-4'>Bejelentkezés</p>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder='Felhasználónév' />
                </div>
                <div className='input-group mb-3'>
                    <input type='password' className='form-control' placeholder='Jelszó' />
                </div>
                <div className='input-group mb-3'>
                    <button className='btn btn-primary form-control' >Bejelentkezés</button>
                </div>
            </>
        )
    }
    const regContent = () => {
        return (
            <>
                <p className='text-center fs-4'>Regisztráció</p>
                <div className='input-group mb-3'>
                    <input type='text' className='form-control' placeholder='Felhasználónév' />
                </div>
                <div className='input-group mb-3'>
                    <input type='password' className='form-control' placeholder='Jelszó' />
                </div>
                <div className='input-group mb-3'>
                    <button className='btn btn-primary form-control' >Regisztráció</button>
                </div>
            </>
        )
    }

    return (
        <>
            <div>

                <button className='btn btn-login' onClick={event => openPopup("login")}>Bejelentkezés</button>
                <button className='btn btn-register' onClick={event => openPopup("reg")}>Regisztráció</button>
                {loginPopup}
                {registerPopup}
            </div>


        </>
    );
}

export default LoginReg;
