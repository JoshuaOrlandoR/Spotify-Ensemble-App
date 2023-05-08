import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import LandingPage from './components/LandingPage/index.jsx';
import SongInfo from './components/SongInfo/index.jsx';
import SongDataContext from './Context/SongDataContext.js'
// import About from './components/About/index.jsx';

function App() {
  const [songData, setSongData] = useState(null);
  const clearSongData = () => {
    setSongData(null);
  };

  return (
    <SongDataContext.Provider value={{ songData, setSongData }}>
      <BrowserRouter>
      <Navbar clearSongData={clearSongData} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/song-info" element={<SongInfo />} />
        </Routes>
      </BrowserRouter>
    </SongDataContext.Provider>
  );
}

export default App;
