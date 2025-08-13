import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom';
import { Footer, Navbar } from './components/'
import { About, Play, Home } from './pages'
import Releases from './pages/Releases';

function App() {

    const location = useLocation();

    // set the title of the html page
    useEffect(() => {
        let path = "";
        switch (location.pathname) {
            case "/":
                path = "Home";
                break;
            case "/about":
                path = "About";
                break;
            case "/play":
                path = "Play BBRPG Online";
                break;
            case "/releases":
                path = "Download the Dang 'ol Game"
                break;
        }
        const titleStr = "Bodybuilder RPG" + " | " + path
        document.title = titleStr;
    }, [location]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/play" element={<Play />} />
                <Route path="/releases" element={<Releases />} />
            </Routes>
            <Footer />
        </>
    );
}
export default App;