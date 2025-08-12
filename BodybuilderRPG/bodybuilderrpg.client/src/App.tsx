import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<h1>About</h1>} />
                {/* Add more routes as needed */}
            </Routes>
        </>
    );
}
export default App;