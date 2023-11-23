
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react';
import SearchPanel from "./SearchPanel";
import "./css/style.css";
const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
const { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown } = bootstrap;
function ToastE({Header, Body, bgColor}) {
    var [toast, setToast] = useState(true);
    const toastRef = useRef();
    useEffect(() => {
        var myToast = toastRef.current
        var bsToast = bootstrap.Toast.getInstance(myToast);;
        if (!bsToast) {
            bsToast = new Toast(myToast, {autohide: false});
            bsToast.show();
            setToast(true);
        }
        else {
            toast ? bsToast.show() : bsToast.hide();

        }
    })
    return (
        <div className="toast position-fixed bottom-0 end-0 m-4" role="alert" ref={toastRef}>
            <div className={`toast-header ${bgColor}`}>
                <strong className="me-auto">{Header}</strong>
                <small>most</small>
                <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close"></button>
            </div>
            <div className="toast-body">
              {Body}
            </div>
        </div>
    )
}

export default ToastE;