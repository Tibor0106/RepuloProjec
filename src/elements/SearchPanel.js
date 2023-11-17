import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { IoMdAirplane } from "react-icons/io";
import { FaCar } from "react-icons/fa6";

function Panel() {

    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active fs-4" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                        <div className='d-flex'>
                            <IoMdAirplane size={40} />
                            <span className='ms-3'>Járataink</span>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">

                        <div className='d-flex'>
                            <FaCar size={40} />
                            <span className='ms-3'>Autóbérlés</span>
                        </div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                        Contact
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <div className='row'>
                        <div className='col-md'>
                            <label className='mt-5 text-bold'>Honnan</label>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='col-md'>
                            <label className='mt-5 text-bold'>Hova</label>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    ...u
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    ..k.
                </div>
                <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                    ...k
                </div>
            </div>

        </>
    );
}

export default Panel;
