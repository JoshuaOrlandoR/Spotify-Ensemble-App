import React, { useContext } from 'react';
import SongDataContext from '../../Context/SongDataContext';
import './SongInfo.css';

function SongInfo({ data }) {
    const { songData } = useContext(SongDataContext);
    console.log("SongInfo data:", songData);
    if (!songData) {
        return <div>Loading...</div>;
      }
    const { name, artists, album, external_urls } = songData;
  
    // You can access other properties from the data object as needed
    const artistNames = artists.map(artist => artist.name).join(', ');
    const albumName = album.name;
    const albumImageUrl = album.images[0]?.url || ''; // Use the first image if available
    const spotifyUrl = external_urls.spotify;
  
    return (
      <div className="song-info">
        <h2>{name}</h2>
        <h3>{artistNames}</h3>
        <img src={albumImageUrl} alt={`Album cover for ${albumName}`} />
        <p>Album: {albumName}</p>
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
      </div>
    );
  }
  

export default SongInfo;
