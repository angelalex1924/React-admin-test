// SocialIcons.js

import React from 'react';
import './SocialIcons.css';

const SocialIcons = () => {
    const redirectToInstagram = () => {
        // Replace 'YOUR_INSTAGRAM_URL' with your actual Instagram profile URL
        window.location.href = 'https://www.instagram.com/aggelos_alex/';
      };
      const redirectToFB = () => {
        // Replace 'YOUR_INSTAGRAM_URL' with your actual Instagram profile URL
        window.location.href = 'https://www.facebook.com/angelalex1905/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0';
      };
      const redirectToGH= () => {
        // Replace 'YOUR_INSTAGRAM_URL' with your actual Instagram profile URL
        window.location.href = 'https://github.com/angelalex1924';
      };
  return (
    <ul class="wrapper">
      <li class="icon facebook" onClick={redirectToFB}>
        <span class="tooltip">Facebook</span>
        <span><i class="fab fa-facebook-f"></i></span>
      </li>
      <li class="icon instagram" onClick={redirectToInstagram}>
        <span class="tooltip">Instagram</span>
        <span><i  href="https://www.instagram.com/aggelos_alex/" class="fab fa-instagram"></i></span>
      </li>
      <li class="icon github" onClick={redirectToGH}>
        <span class="tooltip">Github</span>
        <span><i class="fab fa-github"></i></span>
      </li>
      
    </ul>
  );
};

export default SocialIcons;
