// about.js


import './about.css';
import React, { useState, useEffect } from 'react';


const About = () => {
  useEffect(() => {
  const socialIcons = document.querySelectorAll('.social-icons img');
    socialIcons.forEach((icon, index) => {
      icon.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="login-heading">About Us</h1>
        <p>This page belongs to Angelos Alexopoulos.</p>
        <p className="copyright">© {new Date().getFullYear()} Angelos Alexopoulos</p>
        
        <div className="social-icons">
          <a alt="Instagram" href="https://www.instagram.com/aggelos_alex/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 100 100">
<path d="M37.5,93C22.888,93,11,81.112,11,66.5v-29C11,22.888,22.888,11,37.5,11h29 C81.112,11,93,22.888,93,37.5v29C93,81.112,81.112,93,66.5,93H37.5z" opacity=".35"></path><path fill="#f2f2f2" d="M35.5,91C20.888,91,9,79.112,9,64.5v-29C9,20.888,20.888,9,35.5,9h29C79.112,9,91,20.888,91,35.5 v29C91,79.112,79.112,91,64.5,91H35.5z"></path><polygon fill="#964b96" points="43.05,15.5 84.5,56.95 84.5,43.162 56.838,15.5"></polygon><path fill="#883561" d="M72.147,17.021l10.832,10.832C80.951,22.96,77.04,19.049,72.147,17.021z"></path><path fill="#774696" d="M64.5,15.5h-7.662L84.5,43.162V35.5c0-2.709-0.545-5.29-1.521-7.647L72.147,17.021 C69.79,16.045,67.209,15.5,64.5,15.5z"></path><path fill="#a659b3" d="M35.5,15.5c-1.897,0-3.724,0.281-5.463,0.775l53.688,53.688c0.493-1.739,0.775-3.566,0.775-5.463 v-7.55L43.05,15.5H35.5z"></path><path fill="#d84178" d="M21.346,21.371l57.283,57.283c2.383-2.379,4.152-5.361,5.096-8.691L30.037,16.275 C26.707,17.219,23.724,18.988,21.346,21.371z"></path><path fill="#f4665c" d="M16.264,30.077l53.658,53.658c3.334-0.938,6.322-2.702,8.706-5.082L21.346,21.371 C18.966,23.755,17.203,26.743,16.264,30.077z"></path><path fill="#ef8630" d="M15.5,35.5v7.601L56.899,84.5H64.5c1.882,0,3.696-0.278,5.423-0.764L16.264,30.077 C15.778,31.804,15.5,33.618,15.5,35.5z"></path><polygon fill="#f9b84f" points="15.5,56.888 43.112,84.5 56.899,84.5 15.5,43.101"></polygon><path fill="#ffe385" d="M15.5,64.5c0,2.739,0.553,5.349,1.55,7.726L27.774,82.95c2.378,0.997,4.987,1.55,7.726,1.55h7.612 L15.5,56.888V64.5z"></path><path fill="#ffe797" d="M27.774,82.95L17.05,72.226C19.076,77.058,22.942,80.924,27.774,82.95z"></path><path fill="none" stroke="#40396e" stroke-miterlimit="10" stroke-width="3" d="M64.5,84.5h-29c-11.046,0-20-8.954-20-20v-29 c0-11.046,8.954-20,20-20h29c11.046,0,20,8.954,20,20v29C84.5,75.546,75.546,84.5,64.5,84.5z"></path><g><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M60.838,26.517H39.162 c-7.045,0-12.645,5.6-12.645,12.645v21.677c0,7.045,5.6,12.645,12.645,12.645h21.677c7.045,0,12.645-5.6,12.645-12.645V39.162 C73.483,32.117,67.883,26.517,60.838,26.517z"></path><circle cx="62.995" cy="36" r="1.999" fill="#fff"></circle><g><circle cx="50" cy="50" r="11.497" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></circle></g></g>
</svg>  
          </a>
          <a  alt="Facebook" href="https://www.facebook.com/angelalex1905/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg>  
          </a>
          <a alt="GitHub"  href="https://github.com/angelalex1924" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 64 64">
<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg> 
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
