import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import Navbar from "./components/Navbar.js";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path= "/Home" element={<Home />} />
        <Route path= "/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
