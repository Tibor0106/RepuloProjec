import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $, { event } from 'jquery';
import { useEffect, useRef, useState } from 'react';
import p404 from './pics/404.png'
import { color } from 'framer-motion';
import Popup from './Popup';
import "./css/style.css";
import ToastE from './Toast';
import { Cookies, useCookies } from 'react-cookie';
import { FaVenusMars } from 'react-icons/fa6';
import profile from "./pics/profile.svg";

function LoginReg() {
    const [loginPopup, setLoginPopup] = useState(null);
    const [registerPopup, setRegisterPopup] = useState(null);
    const [notificationToast, setNotificationToast] = useState(null);
    const emailRegister = useRef(null);
    const usernameRegister = useRef(null);
    const passwordRegister = useRef(null);
    const emailLogin = useRef(null);
    const passwordLogin = useRef(null);
    var [relogged, setRelogged] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['logindata']);
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


    const checkValidity = (email, username, password) => {
        if (!(email.length > 0 || username.length > 0 || password.length > 0))
        return false;

    if (!(email.includes('@') && email.includes('.')))
        return false;

    if (!(password.length >= 7))
        return false;

    return true;
    }

    const registerUser = () => {
        const email = emailRegister.current.value;
        const username = usernameRegister.current.value;
        const password = passwordRegister.current.value;

        if (!checkValidity(email, username, password))
            return;

        
            fetch(`http://eurojet.ddns.net:3500/register/${email}/${username}/${password}/admin`).then(res => res.json()).then((response) => {
            if (response.registered){
                loginUser();
            }
            else
                switch(response.error){
                    case "exists":
                        console.log("user already exists!");
                        break;
                    case "noval":
                        console.log("master server returned no value. falling back");
                        loginUser();
                        break;
            }
        });
    }

    const loginUser = () =>{
        const email = emailRegister.current ? emailRegister.current.value : emailLogin.current.value;
        const password = passwordRegister.current ? passwordRegister.current.value : passwordLogin.current.value;

        fetch(`http://eurojet.ddns.net:3500/login/${email}/${password}`).then(res => res.json()).then((response) => {
            if (response.success)
            {
                setCookie('logindata', `${response.logindata}`);
                
                
            }
            else {
                
                sendNotification("Sikertelen Bejelentkezés", "Úgy látszik, bejelentkezésed sikertelen.", "bg-danger");
            }
        })
    }

    const logout = () => {
        setCookie("logindata", undefined);
    }

    const loadPage = () => {
        if (cookies.logindata != "undefined" && cookies.logindata != undefined) {
            if (relogged == false){
                sendNotification("Sikeres Bejelentkezés", `Üdvözlünk újra, ${cookies.logindata.split('&')[1].split('=')[1]}!`, "bg-info");
                setRelogged(true);
            }
            return (
                <>
                    <div>
                        <div className="row">
                        <div className="col-sm-3">
                            <img src={profile} width="65%" className={"profileButton"} onClick={() => {window.location = "/profile"}} style={{marginTop: "-0.5vh", marginLeft: "1rem"}}/>
                        </div>
                            <div className="col-sm-5">
                        <button className='btn btn-logout' onClick={event => logout()}>Kijelentkezés</button></div></div>
                        {notificationToast}
                    </div>
        
        
                </>
            );
        }
        else {
            if (relogged == true)
                setRelogged(false);
            return (
                <>
                    <div>
                        <button className='btn btn-login' onClick={event => openPopup("login")}>Bejelentkezés</button>
                        <button className='btn btn-register' onClick={event => openPopup("reg")}>Regisztráció</button>
                        {loginPopup}
                        {registerPopup}
                        {notificationToast}
                    </div>
    
    
                </>
                );
        }
    }

    const openPopup = (value) => {
        if (value == "login") {
            setLoginPopup(<Popup key={makekey(4)} title={"Bejelentkezés"} Content={loginContent} />)
        } else {
            setRegisterPopup(<Popup key={makekey(4)} title={"Regisztáció"} Content={regContent} />)
        }

    }

    const sendNotification = (header, body, bgColor) => {
        setNotificationToast(<ToastE key={makekey(4)} Header={header} Body={body} bgColor={bgColor}/>)
    }

    const loginContent = () => {
        return (
            <>
                <p className='text-center fs-4'>Bejelentkezés</p>
                <div className='input-group mb-3'>
                    <input type='email' className='form-control' placeholder='Email' ref={emailLogin} />
                </div>
                <div className='input-group mb-3'>
                    <input type='password' className='form-control' placeholder='Jelszó' ref={passwordLogin} />
                </div>
                <div className='input-group mb-3'>
                    <button className='btn btn-primary form-control' onClick={loginUser}>Bejelentkezés</button>
                </div>
            </>
        )
    }
    const regContent = () => {
        return (
            <>
                <p className='text-center fs-4'>Regisztráció</p>
                <div className='row'>
                    <div className='col-md '>
                        <div className='input-group mb-3'>
                            <input type='email' className='form-control' placeholder='Email' ref={emailRegister} />
                        </div>
                    </div>
                    <div className='col-md '>
                        <div className='input-group mb-3'>
                            <input type='text' className='form-control' placeholder='Felhasználónév' ref={usernameRegister} />
                        </div>
                    </div>
                </div>
                <div className='input-group mb-3'>
                    <input type='password' className='form-control' placeholder='Jelszó' ref={passwordRegister} />
                </div>
                <div className='input-group mb-3'>
                    <button className='btn btn-primary form-control' onClick={registerUser} >Regisztráció</button>
                </div>
            </>
        )
    }
            
            
    return (<>
        {loadPage()}
    </>)

}

export default LoginReg;
