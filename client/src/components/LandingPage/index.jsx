import React, { useState, useRef } from 'react';
import axios from 'axios';
import './LandingPage.css';

function LandingPage() {
  const [focused, setFocused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInvalidLink, setIsInvalidLink] = useState(false);
  
  const songLinkInputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const songLinkInput = songLinkInputRef.current.value;

    const regex = /^https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/;
    const isValidSpotifyLink = regex.test(songLinkInput);

    if (!isValidSpotifyLink) {
      setIsInvalidLink(true);
      setIsModalVisible(true);
      console.log("Invalid Spotify link.");
      return;
    }

    // Call your backend API here to send the input value and get the song information.
    try {
      const response = await axios.post('http://localhost:9000/api/song-info', { songLink: songLinkInput });
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error fetching song information:', error);
    }
    
    console.log('Form submitted:', songLinkInput);
  };

  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
    setIsInvalidLink(false);
  };

  return (
    <div className="landing-page">
      <h1 className="title">Ensemble</h1>
      <form onSubmit={handleFormSubmit} className="form-container">
        <input
          ref={songLinkInputRef}
          className={`input-form${focused ? ' focused' : ''}${isInvalidLink ? ' invalid-link' : ''}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Please provide a Spotify song link to get started!'
        />
        <div className="info-icon" onMouseEnter={handleModalToggle} onMouseLeave={handleModalToggle}>
          <i className="fas fa-info-circle"></i>
        </div>
        {isModalVisible && (
          <div className="modal">
            <button className="close-button" onClick={handleModalToggle}>×</button>
            <p>To utilize Ensemble, you must provide a valid Spotify song link!</p>
          </div>
        )}
        <button type="submit" className="submit-button">Let's Explore!</button>
      </form>
      <p className="info-text">Powered by the Spotify API. Created with Vite and React (ADD OTHER TECHNOLOGIES AS WE GO).</p>
    </div>
  );
  
}

export default LandingPage;
