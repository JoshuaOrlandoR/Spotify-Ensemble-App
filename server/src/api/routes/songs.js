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

export { router as songRoutes };
