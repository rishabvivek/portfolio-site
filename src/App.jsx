import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Element, scroller } from 'react-scroll';

import CustomNavbar from './pages/CustomNavbar/CustomNavbar';
import FrontPage from './pages/FrontPage/FrontPage';
import WindowPage from './pages/WindowPage/WindowPage';

function App() {
 

  

  return (
    <div>
      <div className="sticky top-0 z-50">
        <CustomNavbar />
      </div>
      <Element name="frontpage" className="section" >
        <FrontPage />
      </Element>
      <Element name="windowpage" className="section">
        <WindowPage />
      </Element>
    </div>
  );
}

export default App;
