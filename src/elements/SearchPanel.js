import React, { useEffect, useState, useRef } from 'react';
import { IoMdAirplane } from "react-icons/io";
import { FaCar } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { FaHotel } from "react-icons/fa";
import { motion } from 'framer-motion';
import { event, map } from 'jquery';
import Popup from './Popup';
import VisaMasterCard from "./pics/visa_X_master.png";

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
    const [searchCompleteFrom, setSearchCompleteFrom] = useState(null);
    const [searchCompleteTo, setSearchCompleteTo] = useState(null);
    const [foglalasPopup, setFoglalasPopup] = useState(null);
    const [foglalasId, setFoglalasId] = useState(-1);
    const [fromPlace, setFromTo] = useState("");
    const [toDests, setToDests] = useState([]);

    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    useEffect(() => {
        document.title = `EuroJET`;
        fetch('http://eurojet.ddns.net:3500/destinations')
            .then(response => response.json())
            .then(data => {
                setDestinations(data);
            })
            .catch(error => {
                console.error('Hiba a blog üzenetek lekérdezése közben:', error);
                setDestinations([]);
            });
        document.body.addEventListener('click', function () {
            setSearchCompleteFrom(null);
            setSearchCompleteTo(null);
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
    function seperator(input) {
        let nums = input.toString().replace('\.\g');
        if (!nums || nums.endsWith('.')) return;
        return parseFloat(nums).toLocaleString();
    }
    const searchFlight = () => {
        getFlightDestinations(idFrom);
        fetch(`http://eurojet.ddns.net:3500/flights/search/${idFrom}/${searchToRef.current.value.length == 0 ? -1 : idTo}`)
            .then(response => response.json())
            .then(data => {
                setSearchFlightresults(data);
                setSearchActive(true);
            })
            .catch(error => {
                console.error('Hiba az adatok lekérdezése közben! => :', error);
                setDestinations([]);
            });
    }
    const getFlightDestinations = (id) => {
        fetch(`http://eurojet.ddns.net:3500/getrelevantdestinations/${id}`)
            .then(response => response.json())
            .then(data => {
                setToDests(data);
            })
            .catch(error => {
                console.error('Hiba az adatok lekérdezése közben! => :', error);
                setToDests([]);
            });
    }

    const searchOnInput = (v) => {
        if (v == "honnan") {
            const value = searchFromRef.current.value;
            if (value.length === 0) {
                setSearchResultsFrom([]);
                setSearchCompleteFrom(null)
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
            setSearchCompleteFrom(searchCompleteList);

        } else if (v == "hova") {
            const value = searchToRef.current.value;
            if (value.length === 0) {
                setSearchResultsTo([]);
                setSearchCompleteTo(null)
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
            setSearchCompleteTo(searchCompleteListTo);
        }
    }
    const searchCompleteList = () => {
        return (
            <div className="completer">

                {searchResultsFrom.map(i => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: searchResultsFrom.indexOf(i) / 15 }}
                    >
                        <p key={i.destinationName}>
                            <a className="dropdown-item" onClick={event => select(i.destinationId, i.destinationName, "from")}>
                                {i.destinationName}
                            </a>
                        </p>
                    </motion.div>

                ))}
                {searchResultsFrom.length === 0 ? "Nincs találat!" : ""}
            </div>

        )
    }
    const searchCompleteListTo = () => {
        return (
            <div className="completer">
                {searchResultsTo.map(i => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: searchResultsTo.indexOf(i) / 15 }}
                    >
                        <p key={i.destinationName}>
                            <a className="dropdown-item" onClick={event => select(i.destinationId, i.destinationName, "to")}>
                                {i.destinationName}
                            </a>
                        </p>
                    </motion.div>

                ))}
                {searchResultsTo.length === 0 ? "Nincs találat!" : ""}
            </div>

        )
    }
    const FlightResultCard = ({ data }) => {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: searchFlightresults.indexOf(data) / 5 }}
            >
                <div className="flight-card mb-3">
                    <div className="row">
                        <div className="col-sm-3">
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
                            <p className="ms-3">{toDests.find(dest => dest.destinationId === data.destinationId).destinationName}</p>
                        </div>
                        <div className="mt-3 col-sm-2">
                            <label for=""> INDULÁS:</label>
                            <p className="ms-3">{data.departureTime}</p>
                        </div>
                        <div className="mt-3 col-sm-2">
                            <label for=""> ÉRKEZÉS:</label>
                            <p className="ms-3">{data.arrivalTime}</p>
                        </div>

                    </div>

                    <p className='price text-center mt-4'>{seperator(data.price)} FT</p>
                    <div className="col-sm-2 input-group" style={{ marginTop: '35px' }}>
                        <button className="btn btn-primary form-control" onClick={event => foglalas(data.destinationId)}>Foglalás</button>
                    </div>
                </div>



            </motion.div>

        )
    }
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
    const foglalas = (id) => {
        const content = (_id) => {
            return (
                <div>
                    <div className="row">
                        <div className="col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Vezetéknév" ref={firstName} />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Keresztnév" ref={lastName} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="E-mail" ref={email} />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" placeholder="Telefonszám" ref={phoneNumber} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={VisaMasterCard} className="masterCard" alt="vót nincs" />
                    </div>
                    <div className="input-group mt-3">
                        <button className="btn btn-primary form-control" onClick={event => _Lefoglal(_id)}>Lefoglalom</button>
                    </div>

                </div>
            )
        }
        setFoglalasPopup(<Popup title="Fogalálás" key={makekey(5)} Content={() => content(id)} />)
    }
    const _Lefoglal = (id) => {
        var _firstName = firstName.current.value;
        var _lastName = lastName.current.value;
        var _email = email.current.value;
        var _phoneNumber = phoneNumber.current.value;

        var fullName = _firstName + " " + _lastName;
        fetch(`http://localhost:3500/foglal/${fullName}/${_email}/${_phoneNumber}/${id}/admin`)
            .then(data => {

            })
            .catch(error => {
                console.log('Hiba az adatok lekérdezése közben! => :', error);
            });
        alert("Sikeres foglalás");

    }
    const NincsTalalat = () => {
        return (
            <div className="alert alert-warning" role="alert">
                Nincs találat
            </div>
        )
    }
    return (
        <div className='searchPanel'>
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
                <div className="tab-pane fade show active border-1" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <div className='row'>
                        <div className='col-md'>
                            <label className='mt-5 text-bold'>Honnan</label>
                            <div className='input-group'>
                                <input type='text' className='form-control' onInput={event => searchOnInput('honnan')} ref={searchFromRef} />
                            </div>
                            {searchCompleteFrom}
                        </div>
                        <div className='col-md'>
                            <label className='mt-5 text-bold'>Hova</label>
                            <div className='input-group mb-3'>
                                <input type='text' className='form-control' onInput={event => searchOnInput('hova')} ref={searchToRef} />
                            </div>
                            {searchCompleteTo}

                        </div>
                    </div>

                    <div className='input-group mb-3'>
                        <button className='btn btn-primary form-control' onClick={searchFlight}>Keresés</button>
                    </div>
                    {
                        searchFlightresults.map(i => (
                            <FlightResultCard data={i}></FlightResultCard>

                        ))

                    }
                    {searchFlightresults.length == 0 && searchActive ? <NincsTalalat /> : ''}

                </div>
            </div >
            {foglalasPopup}
        </div>

    );
}
export default Panel;