import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PeoplePage from './pages/PeoplePage';
import FilmsPage from './pages/FilmsPage';
import PlanetsPage from './pages/PlanetsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;