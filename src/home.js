// home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ isLoggedIn }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out",
        });
        const hasShownWelcomeMessage = localStorage.getItem("hasShownWelcomeMessage");

        if (isLoggedIn && !hasShownWelcomeMessage) {
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
            });

            localStorage.setItem("hasShownWelcomeMessage", "true");
        }
    }, [isLoggedIn]);

    return (
        <div>
            <ToastContainer />
            <div id="home-landing-container" className="home-landing-container">
                <div className="promo-banner" data-aos="fade-up">
                    <h1>🚀 Welcome to the Ultimate Control Center! 🌟</h1>
                    <p>Unleash the Power of Admin Excellence with Mind-Blowing Animations!</p>
                </div>
                <header className="welcome-message">
                    {!isLoggedIn && (
                        <>
                            <h2>Please Sign-In to access Administrator tools.</h2>
                        </>
                    )}
                </header>
                <div className="home-landing-widgets">
                    {!isLoggedIn && (
                        <>
                            <Link to="/login" className="home-landing-widget" data-aos="fade-up">
                                <div className="home-landing-emoji">🔐</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Login</h2>
                                    <p className="home-landing-description">Access your account securely</p>
                                </div>
                            </Link>
                            <Link to="/register" className="home-landing-widget" data-aos="fade-up">
                                <div className="home-landing-emoji">📝</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Register</h2>
                                    <p className="home-landing-description">Create a new admin account</p>
                                </div>
                            </Link>
                        </>
                    )}
                    {isLoggedIn && (
                        <>
                            <Link to="/user" className="home-landing-widget" data-aos="fade-up">
                                <div className="home-landing-emoji">👤</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">User Management</h2>
                                    <p className="home-landing-description">Manage and view user profiles</p>
                                </div>
                            </Link>
                            <Link to="/permissions" className="home-landing-widget" data-aos="fade-up">
                                <div className="home-landing-emoji">🔒</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Permissions</h2>
                                    <p className="home-landing-description">Control access rights with ease</p>
                                </div>
                            </Link>
                            <Link to="/roles" className="home-landing-widget" data-aos="fade-up">
                                <div className="home-landing-emoji">👑</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Roles</h2>
                                    <p className="home-landing-description">Manage user roles</p>
                                </div>
                            </Link>
                            <div className="home-landing-widget" data-aos="fade-up">
                                <div className="home-landing-emoji">🌟</div>
                                <div className="home-landing-text">
                                    <h2 className="home-landing-title">Welcome to Our Platform</h2>
                                    <p className="home-landing-description">
                                        A place where you can explore and manage everything with ease.
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
