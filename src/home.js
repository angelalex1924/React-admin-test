import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaUsers, FaLock, FaUserShield } from "react-icons/fa";
import './home.css';
import { ToastContainer, toast } from "react-toastify";

function Home({ isLoggedIn }) {
  useEffect(() => {
    const hasShownWelcomeMessage = localStorage.getItem("hasShownWelcomeMessage");

    if (isLoggedIn ) {
      toast.success("Welcome back!", {
        position: "top-right",
        style: {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        background: "linear-gradient(to bottom right, #03ea5a, #c1b408, #8cff00)",
        color: "#fff",
        },
      });

      // Set a flag in localStorage to indicate that the message has been shown
      localStorage.setItem("hasShownWelcomeMessage", "true");
    }
  }, [isLoggedIn]);
    return (
        <div>
            <ToastContainer/>
            <div id="home-landing-container" className="home-landing-container">
                <header className="home-landing-header">
                    <h1>Admin Dashboard</h1>
                    <p>Your One-Stop Solution for Admin Management</p>
                </header>
                <header className="home-landing-container">
                {!isLoggedIn && (
                            <>
                        <h2 className="unique-h2">Please Sign-In in order to access Administrator tools.</h2>
                            </>
                                )}
                </header>
                <div className="home-landing-widgets">
                {!isLoggedIn && (
                    <>
                    <Link to="/login" className="home-landing-widget">
                        <FaSignInAlt className="home-landing-icon" />
                        <h2 className="home-landing-title">Login</h2>
                        <p className="home-landing-description">Access your account securely</p>
                    </Link>
                    <Link to="/register" className="home-landing-widget">
                        <FaUserPlus className="home-landing-icon" />
                        <h2 className="home-landing-title">Register</h2>
                        <p className="home-landing-description">Create a new admin account</p>
                    </Link>
                    </>
                    )}
                    {isLoggedIn && (
                        <>
                            <Link to="/user" className="home-landing-widget">
                                <FaUsers className="home-landing-icon" />
                                <h2 className="home-landing-title">User Management</h2>
                                <p className="home-landing-description">Manage and view user profiles</p>
                            </Link>
                            <Link to="/permissions" className="home-landing-widget">
                                <FaLock className="home-landing-icon" />
                                <h2 className="home-landing-title">Permissions</h2>
                                <p className="home-landing-description">Control access rights with ease</p>
                            </Link>
                            <Link to="/roles" className="home-landing-widget">
                                <FaUserShield className="home-landing-icon" />
                                <h2 className="home-landing-title">Roles</h2>
                                <p className="home-landing-description">Manage user roles</p>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
