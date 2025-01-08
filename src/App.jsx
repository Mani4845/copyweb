import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services/Services';
import Work from './components/OurWokr/Work';
import OurProcess from './components/Process/OurProcess';
import InsightsBar from './components/Insights/InsightsBar';
import ContactForm from './components/Contect/ContactForm';
///import Example from './components/OurWokr/Example';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/our-work" element={<Work/>} />
        <Route path="/OurProcess" element={<OurProcess/>} />
        <Route path="/insights" element={<InsightsBar/>} /> 
        <Route path="/Contact" element={<ContactForm/>} /> 
      </Routes>
    </div>
  );
}

export default App;
