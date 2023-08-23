import "./App.css";
import { Routes, Route } from "react-router-dom";
import Map from "./pages/Map";
import Contact from "./pages/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/map" element={<Map />} />
        </Routes>
    );
}

export default App;
