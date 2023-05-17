import SpotifyWebApi from 'spotify-web-api-node';
import dotenv from 'dotenv';

dotenv.config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const getAccessToken = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);

    // Schedule the next token refresh before the current token expires
    const expiresIn = data.body['expires_in'] * 1000; // Convert to milliseconds
    const bufferTime = 60000; // 60 seconds buffer time
    setTimeout(getAccessToken, expiresIn - bufferTime);
  } catch (error) {
    console.log('Error getting Spotify access token:', error);
  }
};

getAccessToken();

export default spotifyApi;
