import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './login.css';
import SocialIcons from './SocialIcons';
import ErrorNotification from './ErrorNotification';
import WrongNotification from './WrongNotification';
import { GoogleLogin } from 'react-google-login';

const Login = ({ onLogin }) => {
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  const loginUrl = "http://172.16.0.155:8000/api/login";

  const checkOnlineUrls = async () => {
    const urlsToCheck = ["http://192.168.1.76:8000", "http://172.16.0.155:8000"];
    const timeout = 1000;

    const requests = urlsToCheck.map(url =>
      Promise.race([
        fetch(url, { method: "HEAD" })
          .then(response => ({ url, success: response.ok })),
        new Promise(resolve => setTimeout(resolve, timeout, { url, success: false }))
      ])
    );

    const results = await Promise.all(requests);
    const onlineUrl = results.find(result => result.success)?.url || null;
    return onlineUrl;
  };

  const LoginUser = async () => {
    const onlineUrl = await checkOnlineUrls();

    if (onlineUrl) {
      try {
        setIsLoading(true); // Set loading to true before making the request

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch(`${onlineUrl}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          setErrorOccurred(false);
          setWrongCredentials(false);

          const data = await response.json();
          const token = data.access_token;

          localStorage.setItem("token", token);
          onLogin();
          navigate("/");
        } else if (response.status === 401) {
          setWrongCredentials(true);
        } else {
          setErrorOccurred(true);
        }
      } catch (error) {
        console.error("Error during login:", error);
        setErrorOccurred(true);
      } finally {
        setIsLoading(false); // Set loading to false after the request completes
      }
    } else {
      console.error('No online URL available for login.');
    }
  };

  useEffect(() => {
    if (wrongCredentials) {
      const timeoutId = setTimeout(() => {
        setWrongCredentials(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [wrongCredentials]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
  };



  return (
    <div>
   
      {errorOccurred && <ErrorNotification message="An error occurred during login. Please try again." />}
      {wrongCredentials && <WrongNotification message="Wrong credentials. Please check your email and password." />}

      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

      <main className="login-box-container" data-aos="fade-up">
        <form className="login-form-container">
          <h3 className="login-heading">Login</h3>
          <div className="login-forms">
          <div className="login-username-container">
  <input type="text" id="email" name="Username" placeholder="Email" />
</div>

<div className="login-password-container">

  <input type="password" id="password" name="Password" placeholder="Password" />
</div>
            <div className="login-buttons-container">
              <div className="login-btn-box">
                <a href="#" type="button" onClick={LoginUser}>
                  Login
                </a>
              </div>
              <div className="or-box">
  <div className="or-line"></div>
  <p className="or-text">OR</p>
  <div className="or-line"></div>
</div>
            <div className="login-btn-box google-btn-box">
          
  <button href="#" className="google-btn">
    
    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo"/>  Sign in with Google
  </button>
</div>
          </div>
          <div className="login-register-container">
            <p>
              Don't have an account?
              <Link style={{ textDecoration: 'none' }} to="/register">
                <span> Register</span>
              </Link>
            </p>
          </div>
          </div>
        </form>
      </main>
       <SocialIcons />
       <div className={`loading-screen ${isLoading ? 'visible' : ''}`}>
       <div class="loading-spinner"><i class="fas fa-circle-notch"></i></div>        </div>
    </div>
  );

  }
export default Login;
