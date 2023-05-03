import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [focused, setFocused] = useState(false);
  const [input, setInput] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInvalidLink, setIsInvalidLink] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const regex = /^https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/;
    const isValidSpotifyLink = regex.test(input);

    if (!isValidSpotifyLink) {
      setIsInvalidLink(true);
      setIsModalVisible(true);
      console.log("Invalid Spotify link.");
      return;
    }

    // Call your backend API here to send the input value and get the song information.
    console.log('Form submitted:', input);
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
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
