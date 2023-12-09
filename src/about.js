// about.js

import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>This page belongs to Angelos Alexopoulos.</p>
        <p className="copyright">© {new Date().getFullYear()} Angelos Alexopoulos</p>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/aggelos_alex/" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/angelalex1905/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://github.com/angelalex1924" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/github-icon.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
