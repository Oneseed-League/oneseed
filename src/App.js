import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import Awards from './pages/Awards';
import Projections from './pages/Projections';
import Gallery from './pages/Gallery';
import Resources from './pages/Resources';
import './App.css';

// Use your logo file from public folder
const logo = process.env.PUBLIC_URL + '/oneseedlogo.png';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🏀 One Seed Fantasy League Hub 🏀</h1>
        <img src={logo} alt="League Logo" style={{ width: '120px', display: 'block', margin: '0 auto' }} />
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/rankings" style={{ margin: '0 10px' }}>Power Rankings</Link>
          <Link to="/awards" style={{ margin: '0 10px' }}>Awards & Records</Link>
          <Link to="/projections" style={{ margin: '0 10px' }}>GM's Projections</Link>
          <Link to="/gallery" style={{ margin: '0 10px' }}>Meme Gallery</Link>
          <Link to="/resources" style={{ margin: '0 10px' }}>Resources</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/projections" element={<Projections />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
