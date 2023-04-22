// src/App.js

import React from 'react';
import DesktopNavigation from './components/View/DesktopNavigation';
import MobileNavigation from './components/View/MobileNavigation';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
    {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </>
  );
}


export default App;

