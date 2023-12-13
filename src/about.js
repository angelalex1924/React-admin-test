// about.js

import './SocialIcons.css';
import './about.css';
import AOS from "aos";
import React, { useEffect } from "react";



const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <div className="about-container" data-aos="fade-up">
      <div className="about-content">
        <h1 className="login-heading">About Us</h1>
        <p>This page belongs to Angelos Alexopoulos.</p>
        <p className="copyright">© {new Date().getFullYear()} Angelos Alexopoulos</p>
        <ul className='social-icons-container'>
          <li className="social-icon-item">
            <a href="https://www.instagram.com/aggelos_alex/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>
          </li>
          <li className="social-icon-item">
            <a href="https://www.facebook.com/angelalex1905/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook social-icon"></i>
            </a>
          </li>
          <li className="social-icon-item">
            <a href="https://github.com/angelalex1924" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github social-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
