// AboutCard.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faFilm, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './AboutCard.css'; // Import the external CSS file

function AboutCard() {
  return (
    <div className="about-card">
      <blockquote className="about-quote">
        <p>
          Hi Everyone, I am <span className="highlight">Rahul Hadiyal</span>
          from <span className="highlight"> Ahmedabad, India.</span>
          <br />
          I am a motivated Software Engineer with 12 months of training in Software Development.
          <br />
          I have completed my B.Tech in Information Technology at Gujarat Technological University, Ahmedabad.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="activity-list">
          <li className="activity-item">
            <FontAwesomeIcon icon={faMusic} className="activity-icon" /> Listening to Songs
          </li>
          <li className="activity-item">
            <FontAwesomeIcon icon={faFilm} className="activity-icon" /> Watching Movies
          </li>
          <li className="activity-item">
            <FontAwesomeIcon icon={faBookOpen} className="activity-icon" /> Reading Comics
          </li>
        </ul>
      </blockquote>
    </div>
  );
}

export default AboutCard;