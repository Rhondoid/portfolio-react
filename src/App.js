import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import Navbar from "./components/Navbar.js";

// function App() {
//   return (
//     <div className="Portfolio">
//       <About />
//       <Contact/>
//       <Portfolio/>

//     </div>

//   );
// }

// export default App;
// export default function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<About />}>
//           <Navbar/>
//           <Route path= "/Contact" element={<Contact />} />
//           <Route path="/Portfolio" element={<Portfolio />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//       {/* <div className="Portfolio">
//       <Navbar />
//         </div> */}
//     </div>
//   );
// }
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/Contact' exact element={Contact} /> */}
        {/* <Route path='/About' element={About} /> */}
        {/* <Route path='/Portfolio' element={Portfolio} /> */}
        <Route path= "/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        {/* <Route path= "/Contact" element={<Contact />} /> */}
        <Route path="/About" element={<About />} />
        
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
