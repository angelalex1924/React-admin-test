import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';
import ToastNotification from './ToastNotification';
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from './SocialIcons';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ isLoggedIn  }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    const hasShownWelcomeMessage = localStorage.getItem("hasShownWelcomeMessage");

    if (isLoggedIn && !hasShownWelcomeMessage) {
      // Optionally, you can trigger your custom notification here
      // For simplicity, let's use a console log
      console.log("Custom notification: Welcome back!");

      // Save the flag to localStorage
      localStorage.setItem("hasShownWelcomeMessage", "true");
    }
  }, [isLoggedIn]);
    return (
        <div>
              {/* <ToastNotification /> */}

    <div className="home-container">
      <div className="promo-banner">
        <h1>🚀 Welcome to the Ultimate Control Center! 🌟</h1>
        <p>Unleash the Power of Admin Excellence!</p>
      </div>
      <header className="unique-h2">
                    {!isLoggedIn && (
                        <>
                            <h2>Please Sign-In to access Administrator tools.</h2>
                        </>
                    )}
                </header>
        {isLoggedIn && (
                        <>
      <div style={{textDecoration: 'none'}} className="home-content">
        <Link style={{textDecoration: 'none'}} to="/roles" className="home-section" data-aos="fade-up">
          <h2>👑 Roles</h2>
          <div className="home-widget">
            <p>Manage the Roles of your server!</p>
            <p>select this option in order to control the Roles of the Users</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/user" className="home-section" data-aos="fade-up" data-aos-delay="100">
          <h2>👤 Users</h2>
          <div className="home-widget">
            <p>User: John Doe</p>
            <p>User: Jane Smith</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/permissions" className="home-section" data-aos="fade-up" data-aos-delay="200">
          <h2>🛡️ Permissions</h2>
          <div className="home-widget">
            <p>Total Users: 256</p>
            <p>Active Sessions: 20</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/quiz" className="home-section" data-aos="fade-up" data-aos-delay="200">
          <h2> 🌍👨‍💻🔍 Quiz</h2>
          <div className="home-widget">
            <p>Control your Quizzes easy!</p>
            <p>Add questions to quizzes with ease</p>
          </div>
        </Link>
      </div>
      
      <div className="home-instructions" data-aos="fade-up" data-aos-delay="300">
        <p>🌈 Elevate Your Experience!</p>
        <p>Explore the dynamic widgets with mesmerizing animations and unleash the true power of control.</p>
        <p>Hover over elements for surprises and dive into a world of admin brilliance! 🌐</p>
      </div>
      
      </>
        )}
        <div className="home-content">
        {!isLoggedIn && (
                        <>

                            <Link to="/login" style={{textDecoration: 'none'}} className="home-section"  data-aos="fade-up">
                                <div className="home-landing-emoji">🔐</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Login</h2>
                                    <p className="home-landing-description">Access your account securely</p>
                                </div>
                            </Link>
                            <Link to="/register" style={{textDecoration: 'none'}} className="home-section"  data-aos="fade-up">
                                <div className="home-landing-emoji">📝</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Register</h2>
                                    <p className="home-landing-description">Create a new admin account</p>
                                </div>
                            </Link>
                        </>
                    )}
                    </div>
    </div>
    <SocialIcons />
    </div>
  );
};

export default Home;
