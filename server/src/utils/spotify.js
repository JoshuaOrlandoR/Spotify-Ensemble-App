const SpotifyWebApi = require('spotify-web-api-node');
const dotenv = require('dotenv');

dotenv.config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const getAccessToken = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (error) {
    console.log('Error getting Spotify access token:', error);
  }
};

getAccessToken();

module.exports = spotifyApi;
