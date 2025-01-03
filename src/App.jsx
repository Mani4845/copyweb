import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
