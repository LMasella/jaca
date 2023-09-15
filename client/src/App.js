import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Footer } from './components';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

const TRACKING_ID = "G-BS3GMRPY71";

ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search});
  }, []);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
          </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;