import './App.css';
import './loading.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Admin from './admin';
import Roles from './roles';
import User from './user';
import Permissions from './permissions';
import Home from './home';
import { ToastContainer, toast } from 'react-toastify';
import Quiz from './quiz';
import LogoutNotification from './LogoutNotification';
import QuizDetail from './questions';

import About from './about';
import ToastNotification from './ToastNotification';





  function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogoutNotification, setShowLogoutNotification] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
    const [showCustomNotification, setShowCustomNotification] = useState(false);
    const [isGoogleLoggedIn, setIsGoogleLoggedIn] = useState(false);

    
    const handleWelcomeMessage = () => {
      setShowCustomNotification(true);
    };
    useEffect(() => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setIsLoggedIn(true);
      }
    }, []);
  
    useEffect(() => {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode) {
        setIsDarkMode(storedDarkMode === 'true');
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('darkMode', isDarkMode.toString());
      const body = document.body;
      body.classList.toggle('dark-mode', isDarkMode);
      body.classList.toggle('light-mode', !isDarkMode);
    }, [isDarkMode]);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
      setShowWelcomeMessage(true);
    };
    const checkLogoutUrls = async () => {
      const logoutUrlsToCheck = [
        "http://192.168.1.76:8000/api/logout",
        "http://172.16.0.155:8000/api/logout"
      ];
    
      const timeout = 2000; // Χρόνος timeout σε milliseconds
    
      const requests = logoutUrlsToCheck.map(url =>
        Promise.race([
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
          }).then(response => ({ url, success: response.ok })),
          new Promise(resolve => setTimeout(resolve, timeout, { url, success: false }))
        ])
      );
    
      const results = await Promise.all(requests);
    
      const successfulLogoutUrl = results.find(result => result.success)?.url || null;
    
      return successfulLogoutUrl;
    };
    useEffect(() => {
      const storedGoogleToken = localStorage.getItem('googleAuthToken');
      setIsGoogleLoggedIn(!!storedGoogleToken);
    }, []);
    const handleLogout = async () => {
      try {
        setIsLoading(true);
        localStorage.removeItem("googleAuthToken");
        const successfulLogoutUrl = await checkLogoutUrls();
    
        if (successfulLogoutUrl) {
          localStorage.removeItem("token");
          console.log("Logout successful");
         

          // Update the state and show the logout notification
          setShowLogoutNotification(true);
          setIsLoggedIn(false);
    
          setTimeout(() => {
            setShowLogoutNotification(false);
          }, 3000); // Keep the logout notification for 3000 milliseconds (3 seconds)
    
          setTimeout(() => {
            setIsLoading(false); // Set loading to false after completing the logout process
          }, 300); // Adjusted the timeout value to 1000 milliseconds (1 second) for the loading screen
        } else {
          console.error("Logout failed for all URLs");
    
          // Handle errors
    
          // Ensure loading is set to false even in case of an error
          setIsLoading(false);
        }
      } catch (error) {
        console.error("An error occurred during logout:", error);
    
        // Handle errors
    
        // Ensure loading is set to false even in case of an error
        setIsLoading(false);
      }
    };
    
 
  
    useEffect(() => {
      if (isLoggedIn && showWelcomeMessage) {
        toast.success("Welcome back!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          background: "#fff",
          color: "#333",
          theme: "colored",
        });
    
        localStorage.setItem("hasShownWelcomeMessage", "true");
        // Update the state to prevent showing the welcome message again
        setShowWelcomeMessage(false);
      }
    }, [isLoggedIn, showWelcomeMessage]);
    
    const [isQuizDropdownOpen, setIsQuizDropdownOpen] = useState(false);
    const toggleQuizDropdown = () => {
      setIsQuizDropdownOpen(!isQuizDropdownOpen);
    }
    const toggleDropdown = () => {
      console.log('Toggle dropdown');
      setIsDropdownOpen(!isDropdownOpen);
      // Toggle the 'open' class on nav-links
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('open', !isDropdownOpen);
    };
    const closeMenu = () => {
      setIsDropdownOpen(false);
    };
    
    const handleNavLinkClick = () => {
      setIsDropdownOpen(false);
    };
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  const checkWindowWidth = () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  if (window.innerWidth > 600) {
    menuIcon.classList.remove('open');
    navLinks.classList.remove('open');
  }
};

window.addEventListener('DOMContentLoaded', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);

  return (
    <Router>
 
      <nav className="navbar">
  
        <div className="navlist">
        <div className={`menu-icon ${isDropdownOpen ? 'open' : 'close'}`} onClick={toggleDropdown}>        <div className="bar">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
        </div>
       
          </div>
          <div className={`loading-screen ${isLoading ? 'visible' : ''}`}>
          <div class="loading-spinner"><i class="fas fa-circle-notch"></i></div>

      </div>
      <div className="arrow-nav-container">
          {isDropdownOpen && <div className="arrow-nav"></div>}
        </div>
          <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
          
          
          <li className={`nav-link ${isDropdownOpen ? 'open' : ''} ${isDropdownOpen ? 'home-open' : ''}`}>
              <Link to="/" onClick={handleNavLinkClick}>

              <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bi bi-person-plus-fill"> <path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg> 
              {"  "} Home
              </Link>
            </li>
            {!isLoggedIn && !localStorage.getItem('googleAuthToken') ? (
              <>
            <li>
              
              <Link to="/login" onClick={handleNavLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" ><path d="M18.589,0H5.411A5.371,5.371,0,0,0,0,5.318V7.182a1.5,1.5,0,0,0,3,0V5.318A2.369,2.369,0,0,1,5.411,3H18.589A2.369,2.369,0,0,1,21,5.318V18.682A2.369,2.369,0,0,1,18.589,21H5.411A2.369,2.369,0,0,1,3,18.682V16.818a1.5,1.5,0,1,0-3,0v1.864A5.371,5.371,0,0,0,5.411,24H18.589A5.371,5.371,0,0,0,24,18.682V5.318A5.371,5.371,0,0,0,18.589,0Z"/><path d="M3.5,12A1.5,1.5,0,0,0,5,13.5H5l9.975-.027-3.466,3.466a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586a3.5,3.5,0,0,0,0-4.95L13.634,4.939a1.5,1.5,0,1,0-2.121,2.122l3.413,3.412L5,10.5A1.5,1.5,0,0,0,3.5,12Z"/></svg>
 {" "}
                Login
              </Link>
            
            </li>
            <li>
           
              <Link to="/register" onClick={handleNavLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" ><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5V21a7,7,0,0,1,14,0v3a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/><circle cx="12" cy="8" r="2"/><path d="M12,16a5.006,5.006,0,0,0-5,5v3H17V21A5.006,5.006,0,0,0,12,16Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"class="bi bi-person-plus-fill" ><path d="M17,11H13V7a1,1,0,0,0-2,0v4H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V13h4a1,1,0,0,0,0-2Z"/></svg>
{" "} Sign Up
              </Link>
              
            </li>
            </>
            ) : null}
            <li className="nav-item">
            {isLoggedIn || localStorage.getItem('googleAuthToken') ? (
              
              <div className="admin-dropdown">

                <Link to="/admin" className="dropbtn" onClick={handleNavLinkClick}>
                <svg  viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m23.9 11.437a12 12 0 0 0 -23.9 1.563 11.878 11.878 0 0 0 3.759 8.712 4.84 4.84 0 0 0 3.354 1.288h9.767a4.994 4.994 0 0 0 3.509-1.429 11.944 11.944 0 0 0 3.511-10.134zm-16.428 8.224a1 1 0 0 1 -1.412.09 8.993 8.993 0 0 1 5.94-15.751 9.1 9.1 0 0 1 2.249.283 1 1 0 1 1 -.5 1.938 6.994 6.994 0 0 0 -6.367 12.028 1 1 0 0 1 .09 1.412zm4.528-4.661a2 2 0 1 1 .512-3.926l3.781-3.781a1 1 0 1 1 1.414 1.414l-3.781 3.781a1.976 1.976 0 0 1 -1.926 2.512zm5.94 4.751a1 1 0 0 1 -1.322-1.5 6.992 6.992 0 0 0 2.161-7 1 1 0 1 1 1.938-.5 9.094 9.094 0 0 1 .283 2.249 9 9 0 0 1 -3.06 6.751z"/></svg>   Admin             </Link>
                <div className="admin-dropdown-content">
                <div class="arrow"></div>
                  <Link to="/roles" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="12" viewBox="0 0 20 20"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/> </g> </svg>Roles</Link>
                  <Link to="/permissions" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> </svg>Permissions</Link>
                  <Link to="/user" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> </svg>User</Link>
                </div>
              </div>
              
              ) : null}
              
            

              
            </li>
            {isLoggedIn || localStorage.getItem('googleAuthToken')? (
              <div className="admin-dropdown">
          
              <div className="admin-dropdown-content">
                <div class="arrow"></div>
                <Link to="/questions" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-speedometer" height="16" width="16" viewBox="0 0 512 512"> <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>Questions</Link>
              </div>
              </div>
               ) : null}
            <Link to="/about" onClick={handleNavLinkClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg> {" "}
                About Us
              </Link>
              <li>
      {isLoggedIn || localStorage.getItem('googleAuthToken')? (
        <button className="logout-button" onClick={handleLogout}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="text">Logout</div>
        </button>
      ) : null}
    </li>
            
            <input
          type="checkbox"
          id="dark-mode-toggle"
          className="dark-light"
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
        />
        <label htmlFor="dark-mode-toggle"></label>
       
          </ul>
        </div>
      </nav>
      <Routes>
      <Route path="/"
          element={<Home isLoggedIn={isLoggedIn} showWelcomeMessage={showWelcomeMessage} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/roles"
          element={<Roles />}
        />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path='/quiz/:id' element={<QuizDetail />} />
      </Routes>
      {showLogoutNotification || !localStorage.getItem('googleAuthToken') && <LogoutNotification />}
      {isLoggedIn && <ToastNotification /> }
      {isGoogleLoggedIn && <ToastNotification />}

    </Router>
  );
}

export default App;
