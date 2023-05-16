import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutPage">
      <div className="content">
        <div className="aboutTitle">
          <h1>Ensemble - A passion project</h1>
        </div>
        <div className="contentBody">
          <div className="aboutSection">
            <h2>How to use Ensemble</h2>
            <p>
              <ul>
                <li>Enter a Spotify song link into the search bar</li>
                <li>Choose to generate either "Simple" or "Advanced" recommendations</li>
                <li>View the recommended songs!</li>
              </ul>
            </p>
          </div>
          <div className="aboutSection">
            <h2>Why I made Ensemble</h2>
            <p>
            I created Ensemble out of a deep-seated love for music and a passion for discovering new songs and artists. 
            </p>
            <p>
            Music, to me, is more than just sound—it's a journey, a universal language that transcends borders and connects people. 
            </p>
            <p>
            Ensemble is a testament to this belief, a tool to help music lovers venture into the vast, vibrant world of music beyond what's familiar and mainstream.
            </p>
            <p>This started as a tool that was inspired by my friends. Ensemble is a tribute to those who have shared music, and the experience of discovering something new, with me. </p>
          </div>
          <div className="aboutSection">
            <h2>Future Development</h2>
            <p>
            Ensemble will continue to be developed and improved upon.
            <br></br>
            Future development will be outlined in the Ensemble Github repository, in the README.md file.
            <br></br>
            Stay connected with me and Ensemble at the following:
            </p>
            <ul className='about-links'>
              <li><a href="https://github.com/your_username">GITHUB</a></li>
              <li><a href="https://github.com/your_username">Ensemble Github Repository</a></li>
              <li><a href="https://yourwebsite.com">LINKEDIN</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
