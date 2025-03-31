import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyListings from "./pages/PropertyListings";
import PropertyDetails from "./pages/PropertyDetails";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import background from './assets/images/background.jpg';

const appStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
};

function App() {
  return (
    <div style={appStyle}> 
    <Router>
      <div className="App"> {/* Outer wrapper */}
        <Navbar />
        <div className="main-content"> {/* Center the content */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertyListings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
