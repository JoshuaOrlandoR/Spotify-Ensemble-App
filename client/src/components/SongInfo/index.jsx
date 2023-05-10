import React, { useContext, useState } from 'react';
import SongDataContext from '../../Context/SongDataContext';
import './SongInfo.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function SongInfo({ data }) {
  const navigate = useNavigate();
  const { songData } = useContext(SongDataContext);
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  console.log("SongInfo data:", songData);
  if (!songData) {
    return <div className='loading-song-info'>Loading...(if you see this there's a chance the Spotify API did not load your link properly!)</div>;
  }
  const { name, artists, album, external_urls, popularity } = songData;

  // You can access other properties from the data object as needed
  const artistNames = artists.map(artist => artist.name).join(', ');
  const albumName = album.name;
  const albumImageUrl = album.images[0]?.url || ''; // Use the first image if available
  const spotifyUrl = external_urls.spotify;
  const releaseDate = album.release_date;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAlbumArtClick = () => {
    window.open(spotifyUrl, '_blank', 'noopener noreferrer');
  };

  const handleAlbumArtMouseEnter = () => {
    setIsModalVisible(true);
  };

  const handleAlbumArtMouseLeave = () => {
    setIsModalVisible(false);
  };

  const handleSimpleRecommendations = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/recommendations/simple?song_id=${songData.id}`);
      const data = await response.data;
  
      if (data.tracks) {
        console.log('Recommended tracks:', data.tracks);
        setRecommendedTracks(data.tracks);
        navigate('/song-list', { state: { tracks: data.tracks } });
      } else {
        console.error('Error fetching recommendations:', data.error);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };
  

  return (
    <div className="song-info">
      <h2 className="song-title">{name}</h2>
      <h3 className="artist-name">{artistNames}</h3>
      <div className="album-art-container">
        <img
          src={albumImageUrl}
          alt={`Album cover for ${albumName}`}
          className="album-art"
          onClick={handleAlbumArtClick}
          onMouseEnter={handleAlbumArtMouseEnter}
          onMouseLeave={handleAlbumArtMouseLeave}
        />
        {isModalVisible && (
          <div className="modal">
            <p>Click to play on Spotify!</p>
          </div>
        )}
      </div>
      <p className="album-name">Album: {albumName}</p>
      <p className="release-date">Release Date: {releaseDate}</p>
      <p className="popularity">Popularity: {popularity}</p>
      <button className="generate-recommendations" onClick={handleSimpleRecommendations}>
        Generate Simple Recommendations
      </button>
      <button className="generate-recommendations">Generate Advanced Recommendations</button>
    </div>
  );
}

export default SongInfo;
