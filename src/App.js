// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './Oneseedlogo.png';

// Sayfalar
import Home from './pages/Home';
import Rules from './pages/Rules';
import Projections from './pages/Projections';
import Rankings from './pages/Rankings';
import Matchups from './pages/Matchups';
import StatsCenter from './pages/StatsCenter';
import Players from './pages/Players';
import Injuries from './pages/Injuries';
import News from './pages/News';
import Resources from './pages/Resources';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="container">
        <header style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
          <img
            src={logo}
            alt="One Seed Logo"
            style={{ height: '50px', marginRight: '15px', borderRadius: '5px' }}
          />
          <h1>One Seed Fantasy League Hub</h1>
        </header>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/rules">Kurallar</Link>
          <Link to="/projections">Projeksiyonlar</Link>
          <Link to="/rankings">Sıralamalar</Link>
          <Link to="/matchups">Eşleşmeler</Link>
          <Link to="/stats">İstatistik</Link>
          <Link to="/players">Oyuncular</Link>
          <Link to="/injuries">Sakatlık</Link>
          <Link to="/news">Haberler</Link>
          <Link to="/resources">Kaynaklar</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/projections" element={<Projections />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/matchups" element={<Matchups />} />
            <Route path="/stats" element={<StatsCenter />} />
            <Route path="/players" element={<Players />} />
            <Route path="/injuries" element={<Injuries />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 One Seed Fantasy League. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
