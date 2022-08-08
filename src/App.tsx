import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';  
import Explore from './pages/Explore';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path='/' element={<LandingPage />}/> 
        <Route path='/explore' element={<Explore />}/> 
      </Routes>
    </Router>
  );
}

export default App;
