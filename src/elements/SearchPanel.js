import React, { useEffect, useState, useRef } from 'react';
import { IoMdAirplane } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import { FaHotel } from "react-icons/fa";
import { map } from 'jquery';

function Panel() {
    const [destinations, setDestinations] = useState([]);
    const [searchResultsFrom, setSearchResultsFrom] = useState([]);
    const [searchResultsTo, setSearchResultsTo] = useState([]);
    const [searchActive, setSearchActive] = useState(false);
    const [idFrom, setIdfrom] = useState(-1);
    const [idTo, setIdTo] = useState(-1);
    const searchFromRef = useRef(null);
    const [searchFlightresults, setSearchFlightresults] = useState([]);
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
            setIdfrom(id);
        } else {
            searchToRef.current.value = name;
            setIdTo(id);
        }

    }

    const searchFrom = () => {
        const value = searchFromRef.current.value;
        if (value.length === 0) {
            setSearchResultsFrom([]);
            return;
        }
        setSearchActive(false);
        setSearchFlightresults([])
        var items = [];
        destinations.forEach(i => {
            if (i.destinationName.toLowerCase().includes(value.toLowerCase())) {
                items.push(i);
            }
        })
        setSearchResultsFrom(items);
    }

    const searchTo = () => {
        const value = searchToRef.current.value;
        if (value.length === 0) {
            setSearchResultsTo([]);
            return;
        }
        setSearchActive(false);
        setSearchFlightresults([])
        var items = [];
        destinations.forEach(i => {
            if (i.destinationName.toLowerCase().includes(value.toLowerCase())) {
                items.push(i);
            }
        })
        setSearchResultsTo(items);
    }
    const searchFlight = () => {
        fetch(`http://127.0.0.1:3500/searchflight/${idFrom}/${idTo}/admin`)
            .then(response => response.json())
            .then(data => {
                setSearchFlightresults(data);
                setSearchActive(true);
            })
            .catch(error => {
                console.error('Hiba a blog üzenetek lekérdezése közben:', error);
                setDestinations([]);
            });
    }
    const FlightResultCard = ({ data }) => {
        return (
            <div className="flight-card mb-3">
                <div className="row">
                    <div className="col-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                            className="bi bi-airplane-engines" viewBox="0 0 16 16">
                            <path
                                d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                        </svg>
                    </div>
                    <div className="mt-3 col-sm-2 ">
                        <label for=""> HONNAN:</label>
                        <p className="ms-3">{searchFromRef.current.value}</p>
                    </div>
                    <div className="mt-3 col-sm-2">
                        <label for=""> HOVA:</label>
                        <p className="ms-3">{searchToRef.current.value}</p>
                    </div>
                    <div className="mt-3 col-sm-2">
                        <label for=""> INDULÁS:</label>
                        <p className="ms-3">{data.departureTime}</p>
                    </div>
                    <div className="mt-3 col-sm-2">
                        <label for=""> ÉRKEZÉS:</label>
                        <p className="ms-3">{data.arrivalTime}</p>
                    </div>
                    <div className="col-sm-2 ms-3" style={{ marginTop: '35px' }}>
                        <button className="btn btn-primary">Foglalás</button>
                    </div>
                </div>
            </div>
        )
    }
    const NincsTalalat = () => {
        return (
            <div className="alert alert-warning" role="alert">
                Nincs találat
            </div>
        )
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
                    <button className="nav-link fs-4" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                        <div className='d-flex'>
                            <FaHotel size={40} />
                            <span className='ms-3'>
                                Hotel</span>
                        </div>
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
                    <div className='input-group mb-3'>
                        <button className='btn btn-primary form-control' onClick={searchFlight}>Kersés</button>
                    </div>
                    {

                        searchFlightresults.map(i => (

                            <FlightResultCard data={i}></FlightResultCard>

                        ))

                    }
                    {searchFlightresults.length == 0 && searchActive ? <NincsTalalat /> : ''}

                </div>
            </div>
        </>
    );
}
export default Panel;
