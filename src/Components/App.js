import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Library from './components/Library';
import Florist from './components/Florist';
import Cafe from './components/Cafe';
import Bakery from './components/Bakery';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/florist" element={<Florist />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/bakery" element={<Bakery />} />
      </Routes>
    </Router>
  );
}

export default App;
