import React, { useEffect, useRef } from 'react';
import './SongCard.css';

function SongCard({ track }) {
  const { name, artists, album, external_urls } = track;
  const artistNames = artists.map(artist => artist.name).join(', ');
  const albumImageUrl = album.images[0]?.url || '';

  const titleRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const titleElement = titleRef.current;

      if (!titleElement) {
        return;
      }

      titleElement.style.fontSize = '18px';

      while (titleElement.scrollHeight > titleElement.clientHeight) {
        const fontSize = parseFloat(window.getComputedStyle(titleElement).fontSize);
        titleElement.style.fontSize = `${fontSize - 5}px`;
      }
    };

    adjustFontSize();
  }, [name]);

  return (
    <div className="song-card">
      <img src={albumImageUrl} alt={`Album cover for ${name}`} className="song-card-image" />
      <div className="song-card-info">
        <h3 className="song-card-title" ref={titleRef}>{name}</h3>
        <p className="song-card-artists">{artistNames}</p>
      </div>
      <button
        onClick={() => window.open(external_urls.spotify, '_blank', 'noopener noreferrer')}
        className="song-card-button"
      >
        Listen on Spotify
      </button>
    </div>
  );
}

export default SongCard;
