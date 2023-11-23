import './../App.css';
import $ from 'jquery';
import { useEffect } from 'react';
import p404 from './pics/404.png'
import { motion } from 'framer-motion';
import './css/style.css';

function ProfileInfo({username, email}) {
    return (<>
    
    <div className="row mt-5" style={{height:"40vh"}}>
        <div className="col-sm-1"></div>
        <div className="col-sm-1" style={{backgroundColor: "yellow"}}>
            DROPDOWN: USERINFO & SUPPORT TICKETS
        </div>
        <div className="col-sm-9" style={{backgroundColor: "red"}}>
            USERINFO/SUPPORT TICKETS
        </div>
        <div className="col-sm-1"></div>
    </div>
    
    </>)
}

export default ProfileInfo;