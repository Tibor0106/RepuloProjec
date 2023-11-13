import Navbar from './../elements/Navbar';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { useEffect } from 'react';
function Home() {
    useEffect(() => {
        document.title = `Főolal`;
    });
    return (
        <>
            <header>
                <Navbar />
            </header>
            <p className='text-center'>Hello world!!</p>
        </>
    );
}

export default Home;
