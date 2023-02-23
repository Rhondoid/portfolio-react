import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';

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
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}>
          <Route path= "/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);