import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/footer';
import Home from './Pages/Home';
import Designs from './Pages/Designs';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
  const [designname, setDesignName] = useState(
    {
      thumbnail: 'https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/kbr-d-1662025138-0EGbI.png',
      title: 'Kids Room Design',
      noOfDesigns: 509
    }
  )
  return (
    <Router basename='/'>
      <div className='relative w-full min-h-screen overflow-x-hidden'>
        <>
          <Navbar windowWidth={windowWidth} />
          <a
        href="https://wa.me/+917428430119"
        class="whatsapp_float fixed w-[60px] bottom-1/2 -right-1 rounded-lg z-50 bg-white shadow-xl p-5"
        target="_blank"
        rel="noopener noreferrer"
      >
<img src="https://img.icons8.com/color/30/whatsapp--v1.png" className='z-50' alt="" />
      </a>
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/design-ideas' element={<Designs />} />
            <Route path='/design-ideas/:designname/maindesign' element={<DesignCard 
            thumbnail={designname.thumbnail}
            title={designname.title}
            noOfDesigns={designname.noOfDesigns}
            />} />
            <Route path='/design-ideas/:designname/:specificdesign' element={<SpecificDesign />} />
            <Route path='/design-ideas/:designname' element={<DesignCategory
            thumbnail={designname.thumbnail}
            title={designname.title}
            feet={designname.feet}
            
            />} />
          </Routes>
          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;
