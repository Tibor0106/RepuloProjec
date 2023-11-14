import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
import SearchPanel from './SearchPanel';
function Home() {
    useEffect(() => {
        document.title = `Főolal`;
    });
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className='mt-5'>
                <SearchPanel />
            </div>
        </>
    );
}

export default Home;
