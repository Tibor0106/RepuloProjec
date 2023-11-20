import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import SearchPanel from './SearchPanel';
import { motion } from 'framer-motion';


function Popup({title, Content}) {
    const [isOpen, setOpen] = useState(false);
    const close = () =>{
        setOpen(!isOpen);      
    }

    return (
        <>
            <div className='blur' style={{display: `${isOpen ? "block" : "none"}`}}>
                <div className='popup'>
                    <div className='d-flex justify-content-between'>
                        <p className='title'>{title}</p>
                        <button className='btn btn-close' onClick={close}></button>
                </div>              
                <Content/>
            </div>
        </div>             
        </>
    )
}

export default Popup;
