import React, { useEffect, useState, useRef } from 'react';
import { IoMdAirplane } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

function Panel() {
    const [destinations, setDestinations] = useState([]);
    const [searchResultsFrom, setSearchResultsFrom] = useState([]);
    const [searchResultsTo, setSearchResultsTo] = useState([]);
    const searchFromRef = useRef(null);
    const searchToRef = useRef(null);

    useEffect(() => {
        document.title = `EuroJET`;
        fetch('http://127.0.0.1:3500/destinations/admin')
            .then(response => response.json())
            .then(data => {
                setDestinations(data);
            })
            .catch(error => {
                console.error('Hiba a blog üzenetek lekérdezése közben:', error);
                setDestinations([]);
            });

    }, []);

    const select = (id, name, item) => {
        if (item == "from") {
            searchFromRef.current.value = name;
        } else {
            searchToRef.current.value = name;
        }


    }

    const searchFrom = () => {
        console.log("Search from called");
        const value = searchFromRef.current.value;
        if (value.length === 0) {
            setSearchResultsFrom([]);
            return;
        }

        var items = [];
        destinations.forEach(i => {
            if (i.destinationName.toLowerCase().includes(value.toLowerCase())) {
                items.push(i);
            }
        })
        setSearchResultsFrom(items);
    }

    const searchTo = () => {
        console.log("Search to called");
        const value = searchToRef.current.value;
        if (value.length === 0) {
            setSearchResultsTo([]);
            return;
        }

        var items = [];
        destinations.forEach(i => {
            if (i.destinationName.toLowerCase().includes(value.toLowerCase())) {
                items.push(i);
            }
        })
        setSearchResultsTo(items);
    }

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
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className='row'>
                        <div className='col-md'>
                            <label className='mt-5 text-bold'>Honnan</label>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control dropdown-toggle' onInput={searchFrom} data-bs-toggle="dropdown" aria-expanded="false" ref={searchFromRef} />
                                <ul className="dropdown-menu">

                                    {searchResultsFrom.map(i => (
                                        <li key={i.destinationName}><a className="dropdown-item" onClick={event => select(i.destinationId, i.destinationName, "from")}>{i.destinationName}</a></li>
                                    ))}

                                    {searchResultsFrom.length === 0 ? "Kezdj el gépelni a kereséshez!" : ""}
                                </ul>
                            </div>
                        </div>
                        <div className='col-md'>
                            <label className='mt-5 text-bold'>Hova</label>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control dropdown-toggle' onInput={searchTo} data-bs-toggle="dropdown" aria-expanded="false" ref={searchToRef} />
                                <ul className="dropdown-menu">

                                    {searchResultsTo.map(i => (
                                        <li key={i.destinationName}><a className="dropdown-item" onClick={event => select(i.destinationId, i.destinationName, "to")}>{i.destinationName}</a></li>
                                    ))}

                                    {searchResultsTo.length === 0 ? "Kezdj el gépelni a kereséshez!" : ""}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ... */}
            </div>
        </>
    );
}

export default Panel;
