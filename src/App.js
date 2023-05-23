import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import Option from './components/Options/Options';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/footer';
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
    <div className="App">
      <>
      <Navbar windowWidth={windowWidth}/>
      <Option />
      <Projects />
      <Footer />
      </>
    </div>
  );
}

export default App;
