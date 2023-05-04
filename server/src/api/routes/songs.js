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


export { router as songRoutes };
