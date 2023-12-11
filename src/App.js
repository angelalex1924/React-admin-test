import './App.css';
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
import About from './about';




function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

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
  };
// Access from Home
  const handleLogout = async () => {
    const logoutUrl = "http://192.168.1.76:8000/api/logout";
// Access from IEK
// const handleLogout = async () => {
//   const logoutUrl = "http://172.16.0.155:8000/api/logout";
   

    
    try {
      const response = await fetch(logoutUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`


        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        console.log("Logout successful");
        toast("👌 You have logged out!", {
          position: "top-right",
          style: {
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            background: "#fff",
            color: "#333",
          },
        });
        setIsLoggedIn(false);
        
      } else {
        toast.info("👌 You have logged out!", {
          position: "top-right",
          style: {
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            background: "linear-gradient(to bottom right, #03ea5a, #c1b408, #8cff00)",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error("API is Offline!", error);
      toast.error("API is Offline!.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  };

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
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
        <div className={`menu-icon ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <div className="bar">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
        </div>
       
          </div>
          <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
          
            <li>
              <Link to="/" onClick={handleNavLinkClick}>

              <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bi bi-person-plus-fill"> <path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg> 
              {"  "} Home
              </Link>
            </li>
            {!isLoggedIn ? (
              <>
            <li>
            
              
              <Link to="/login" onClick={handleNavLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg> {" "}
                Login
              </Link>
            
            </li>
            <li>
           
              <Link to="/register" onClick={handleNavLinkClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg> {" "} Signup
              </Link>
              
            </li>
            </>
            ) : null}
            <li className="nav-item">
            {isLoggedIn ? (
              <div className="admin-dropdown">
                <Link to="/admin" className="dropbtn" onClick={handleNavLinkClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16"> <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/> <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/> </svg>                 {"  "}  Admin
                </Link>
                <div className="admin-dropdown-content">
                  <Link to="/roles" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="12" viewBox="0 0 20 20"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/> </g> </svg>Roles</Link>
                  <Link to="/permissions" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-shaded" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> </svg>Permissions</Link>
                  <Link to="/user" onClick={handleNavLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> </svg>User</Link>
                </div>
              </div>
              ) : null}
            </li>
            <Link to="/about" onClick={handleNavLinkClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg> {" "}
                About Us
              </Link>
            <li>
              {isLoggedIn ? (
                <button className="logout-button" onClick={handleLogout}><svg width="18" height="18" viewBox="0 0 24 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <circle cx="9" cy="7" r="3" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M11 13H7C4.79086 13 3 14.7909 3 17C3 18.6569 4.34315 20 6 20H12C13.6569 20 15 18.6569 15 17C15 14.7909 13.2091 13 11 13Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15.7751 9.25L20.7249 9.25M20.7249 9.25L19 7.5M20.7249 9.25L19 10.9749" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
                  <span className="logout-text"> Logout</span>
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
        <Route  path="/"
                element= {<Home isLoggedIn={isLoggedIn}/>}  />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/roles"
          element={isLoggedIn ? <Roles /> : <Navigate to="/login" />}
        />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
    </Router>
  );
}

export default App;
