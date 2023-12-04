import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Admin from './admin';
import Roles from './roles';
import User from './user';
import Permissions from './permissions';
import Home from './home';
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    const logoutUrl = "http://localhost:8000/api/logout";
    setIsLoggedIn(false);
    localStorage.removeItem('token');

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
  

  return (
    <Router>
      <nav className="navbar">
        <div className="navlist">
          <div className="menu-icon" onClick={toggleDropdown}>
            <div className={`bar ${isDropdownOpen ? 'change' : ''}`} />
            <div className={`bar ${isDropdownOpen ? 'change' : ''}`} />
            <div className={`bar ${isDropdownOpen ? 'change' : ''}`} />
          </div>
          <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
            <li>
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg> {" "}
                Home
              </Link>
            </li>
            {!isLoggedIn ? (
              <>
            <li>
            
              
              <Link to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 512 512">
                  <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg> {" "}
                Login
              </Link>
            
            </li>
            <li>
           
              <Link to="/register">
                <svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 640 512">
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg> {" "} Signup
              </Link>
              
            </li>
            </>
            ) : null}
            <li className="nav-item">
            {isLoggedIn ? (
              <div className="admin-dropdown">
                <Link to="/admin" className="dropbtn">
                  <svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 512 512">
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg> {" "} Admin
                </Link>
                <div className="admin-dropdown-content">
                  <Link to="/roles">Roles</Link>
                  <Link to="/permissions">Permissions</Link>
                  <Link to="/user">User</Link>
                </div>
              </div>
              ) : null}
            </li>
            <li>
              {isLoggedIn ? (
                <button className="logout-button" onClick={handleLogout}>
                  <span className="logout-text">Logout</span>
                </button>
              ) : null}
            </li>
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
        <Route path="/roles" element={<Roles />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </Router>
  );
}

export default App;
