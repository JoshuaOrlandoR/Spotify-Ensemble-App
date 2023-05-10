import React from 'react';
import { useLocation } from 'react-router-dom';
import './SongList.css';
import SongCard from '../SongCard';

function SongList() {
  const location = useLocation();
  const tracks = location.state.tracks;

  return (
    <div className="song-list">
    <div className="song-list-grid">
      {tracks.map(track => (
        <SongCard key={track.id} track={track} />
      ))}
    </div>
  </div>
);
}

export default SongList;
