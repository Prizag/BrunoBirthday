import React,{useEffect,useRef} from 'react';
import BirthdayCard from './BirthdayCard';
import PhotoGallery from './PhotoGallery';
import MessageForm from './MessageForm';
import {  Route, Routes } from 'react-router-dom';
import SurprisePage from './SurprisePage';
import './App.css';
import birthdayAudio from './assets/Happybirthday.mp3';



function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);
  return (
    <div className="App">
      <audio ref={audioRef} src={birthdayAudio} loop />
    


      <Routes>
        <Route path='/BrunoBirthday'element={<BirthdayCard />} />
        <Route path='/surprise' element={<SurprisePage />} />
        <Route path='/PhotoGallery' element={<PhotoGallery/>}/>
        <Route path='/messageform' element={<MessageForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
