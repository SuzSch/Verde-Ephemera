import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LibraryControl from './Library/LibraryControl';
import FloristControl from './Florist/FloristControl';
import ItemDetail from './ItemDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<LibraryControl />} />
        <Route path="/Item/:itemId" element={<ItemDetail />} />
        <Route path="/florist" element={<FloristControl />} />
        {/* <Route path="/cafe" element={<Cafe />} />
        <Route path="/bakery" element={<Bakery />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
