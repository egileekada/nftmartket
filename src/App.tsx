import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';  
import Activity from './pages/Activity';
import CollectionItems from './pages/CollectionItems';
import Explore from './pages/Explore';
import LandingPage from './pages/LandingPage';
import Ranking from './pages/Ranking';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path='/' element={<LandingPage />}/> 
        <Route path='/explore' element={<Explore />}/> 
        <Route path='/collection' element={<CollectionItems />}/> 
        <Route path='/ranking' element={<Ranking />}/> 
        <Route path='/activity' element={<Activity />}/> 
      </Routes>
    </Router>
  );
}

export default App;
