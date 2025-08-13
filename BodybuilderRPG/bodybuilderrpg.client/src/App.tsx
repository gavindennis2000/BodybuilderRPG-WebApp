import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom';
import { Footer, Navbar } from './components/'
import { About, Demo, Home } from './pages'

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
            case "/demo":
                path = "Play BBRPG Online";
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
                <Route path="/demo" element={<Demo />} />
                {/* Add more routes as needed */}
            </Routes>
            <Footer />
        </>
    );
}
export default App;