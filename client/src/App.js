import './styles/App.css'
import LoadingScreen from './components/loadingScreen';
import { useEffect, useState, useRef } from 'react';
import {AnimatePresence } from "framer-motion";
import NavBar from './components/navBar';
import About from './pages/about';
import Skills from './pages/skill';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Modal from './components/modal';

function App() {
  const [showLoading, setShowLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const modalIndex = useRef(null);

  function showModal(index){
    setOpenModal(true);
    modalIndex.current = index
  }

  useEffect(() => {
    setTimeout(()=>{setShowLoading(!showLoading)}, 1)
  }, [])
  
  return (
    <div id='app_container'>
      <AnimatePresence>
        {showLoading && <LoadingScreen/>}
      </AnimatePresence>
        {!showLoading && 
          <div id="response_container">
            <About/> 
            <Skills/> 
            <Projects showModal={showModal}/>
            <Contact/>
            <NavBar/>
            {openModal && <Modal modalIndex={modalIndex.current} onClose={() => setOpenModal(false)}/>}
          </div>
        }
    </div>
  );
}

export default App;
