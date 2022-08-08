import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';  
import CollectionItems from './pages/CollectionItems';
import Explore from './pages/Explore';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path='/' element={<LandingPage />}/> 
        <Route path='/explore' element={<Explore />}/> 
        <Route path='/collection' element={<CollectionItems />}/> 
      </Routes>
    </Router>
  );
}

export default App;
