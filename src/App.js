import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/footer';
import Home from './Pages/Home';
import Designs from './Pages/Designs';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DesignCard from './components/DesignIdeas/MainDesignPage/DesignCard';
import SpecificDesign from './Pages/SpecificDesign';

import DesignCategory from './components/DesignIdeas/DesignCategory';
function App() {
  // Watching for windowWidth to make responsive
  let width;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  const [windowWidth, setWindowWidth] = useState(width);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
  }, [windowWidth]);

  return (
    <Router basename='/'>
      <div className='relative w-full min-h-screen overflow-x-hidden'>
        <>
          <Navbar windowWidth={windowWidth} />
          <a
            href="https://wa.me/+917428430119"
            class="whatsapp_float fixed  bottom-1/2 right-1 rounded-lg z-50 bg-white shadow-xl "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://storage.googleapis.com/bik-assets/bap/fab-assets/images/DDQoj5ZVYwYd8aEtdFP5NRvL2Mk2/9c3038943b.png" className='z-50 block mx-auto w-14' alt="" />
          </a>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/design-ideas' element={<Designs />} />
            <Route path='/design-ideas/:designCategory/:designName' element={<SpecificDesign />} />
            <Route path='/design-ideas/:designCategory' element={<DesignCategory windowWidth={windowWidth}/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;
