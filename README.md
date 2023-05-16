# Ensemble: A Passion Project

Ensemble is a music recommendation tool that allows users to discover new songs and artists based on their input.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Demonstration](#demonstration)
- [Project Motivation](#project-motivation)
- [Future Development](#future-development)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)

## Features

- Enter a Spotify song link into the search bar
- Choose to generate either "Simple" or "Advanced" recommendations
- View the recommended songs

## Getting Started
I would love to host this app in the future! Once it is set up, the available link will be here: 
<br>
<br>
These instructions will guide you on how to run Ensemble locally on your machine for development and testing purposes. 

### Prerequisites

The following are the tools and libraries you will need to set up this project:

- Node.js
- npm
- A web browser (e.g., Google Chrome, Firefox)
- VS Code (or any alternative that you are comfortable with)
- You must do 2 things to ensure the program runs locally, if there is no live hosted link : 
<br>
1. create a .env.local file in the client directory. Add this to the file : 
VITE_APP_API_URL=http://localhost:9000 (you can change the port). 
<br>
2. create a spotify account and sign in on the developer page (https://developer.spotify.com/). You may need to create a project, but you won't need to do anything in this project, aside from grabbing the essential values. Once this is done, in the server directory, create a .env file. In this file, you will need to add the following : 
<br>
SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_DEV_ID
<br>
SPOTIFY_CLIENT_SECRET=YOU_SPOTIFY_CLIENT_SECRET
<br>
<br>
The application will NOT function without these keys to acccess the Spotify API. I ask you name the project Ensemble: Local Version, or a similar title. 
<br>
 Installation (for local use)
<br>
1. Clone the repository to your local machine using the following command (or download from the Repo!): <br>
2. Navigate to the directory <br>
3. In your coding application, open an integrated terminal and install dependencies with npm install (ensure do open a terminal in both the client and server, and complete this step for BOTH, otherwise the app will not work) <br>
4. Once installed, start the application with npm start, this starts the client and the server <br>
5. This will open the application on the specified localhost port <br>

## How to Use

1. Enter a Spotify song link into the search bar
2. Choose to generate either "Simple" or "Advanced" recommendations
3. View the recommended songs

## Demonstration
SCREENSHOTS AND MAYBE A SHORT VIDEO GOES HERE

## Project Motivation

I created Ensemble out of a deep-seated love for music and a passion for discovering new songs and artists. I wanted a tool to help me explore and navigate my love for music, and sharing music with others. 

## Future Development

1. Spotify Integration for added features like playlist generation.
2. The ability to save generated lists (on the site). 
3. Cleaning up the UI 
4. Adding the ability for users to control the advanced list generation parameters (detailed in the audio-features Spotify API endpoint).
5. Infinite Scrolling for more than 12 songs 
<br> 
## Contribution
I am thankful to all who choose to use my app! If you have any suggestions on features, you can email me or contact me on linkedin! 
My contact information will be in the contact section below! 

## License

I am more than happy to allow users to utilize the application locally. I DO NOT give permission to redistribute the application, or monetize it in any form. 

## Contact
