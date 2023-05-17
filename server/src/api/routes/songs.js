import express from 'express';
const router = express.Router();
import spotifyApi from '../../utils/spotify.js';

router.post('/fetchSongData', async (req, res, next) => {
  const { songLink } = req.body;

  try {
    const songId = songLink.split('/').pop();
    const songData = await spotifyApi.getTrack(songId);
    res.status(200).json(songData.body);
  } catch (error) {
    next(error);
  }
});

// POST /api/song-info
router.post('/song-info', async (req, res) => {
  const { songLink } = req.body;

  try {
    // Validate the Spotify link and fetch the song information
    const songId = songLink.split('/').pop();
    const songData = await spotifyApi.getTrack(songId);
    res.status(200).json(songData.body);
  } catch (error) {
    console.error(`Error fetching song information: ${error.message}`);
    console.error('Error details:', error); // Add this line for more detailed error logging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/recommendations/simple
router.get('/recommendations/simple', async (req, res) => {
  try {
    const songId = req.query.song_id;

    if (!songId) {
      return res.status(400).json({ error: 'Missing required parameter: song_id' });
    }

    console.log('Fetching recommendations for song ID:', songId); 
    const recommendations = await spotifyApi.getRecommendations({ seed_tracks: [songId], limit: 12 });
    console.log('Fetched recommendations:', recommendations.body); 
    res.json(recommendations.body);
  } catch (err) {
    console.error('Error fetching recommendations:', err);
    res.status(500).json({ error: 'Error fetching recommendations' });
  }
});

// GET audio features
router.get('/audio-features', async (req, res) => {
  try {
    const songId = req.query.song_id;

    if (!songId) {
      return res.status(400).json({ error: 'Missing required parameter: song_id' });
    }

    console.log('Fetching audio features for song ID:', songId); 

    const audioFeatures = await spotifyApi.getAudioFeaturesForTrack(songId);

    console.log('Fetched audio features:', audioFeatures.body); 

    res.json(audioFeatures.body);
  } catch (err) {
    console.error('Error fetching audio features:', err);
    res.status(500).json({ error: 'Error fetching audio features' });
  }
});

// GET /api/recommendations/advanced
router.get('/recommendations/advanced', async (req, res) => {
  try {
    const songId = req.query.song_id;
    const targetAcousticness = req.query.target_acousticness;
    const targetEnergy = req.query.target_energy;
    const targetTempo = req.query.target_tempo;
    const targetSpeechiness = req.query.target_speechiness;

    if (!songId) {
      return res.status(400).json({ error: 'Missing required parameter: song_id' });
    }

    console.log('Fetching advanced recommendations for song ID:', songId); 
    const recommendations = await spotifyApi.getRecommendations({ 
      seed_tracks: [songId], 
      target_acousticness: targetAcousticness,
      target_energy: targetEnergy,
      target_tempo: targetTempo,
      target_speechiness: targetSpeechiness,
      limit: 13 
    });

    console.log('Fetched advanced recommendations:', recommendations.body); 
    res.json(recommendations.body);
  } catch (err) {
    console.error('Error fetching advanced recommendations:', err);
    res.status(500).json({ error: 'Error fetching advanced recommendations' });
  }
});


export { router as songRoutes };
