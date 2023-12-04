import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus, FaUsers, FaLock, FaUserShield } from "react-icons/fa";
import './home.css';

function Home() {
    return (
        <div id="home-landing-container" className="home-landing-container">
            <header className="home-landing-header">
                <h1>Admin Dashboard</h1>
                <p>Your One-Stop Solution for Admin Management</p>
            </header>
            <div className="home-landing-widgets">
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
                
            </div>
        </div>
    );
}

export default Home;
