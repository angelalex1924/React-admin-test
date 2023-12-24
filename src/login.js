import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './login.css';
import SocialIcons from './SocialIcons';
import ErrorNotification from './ErrorNotification';
import WrongNotification from './WrongNotification';
import ToastNitification from './ToastNotification'; // Import your AccessNotification component
import {gapi} from 'gapi-script';
import GoogleLogin from './googlelogin';


const clientId = "397134373244-87j1kio7cp710v29hf5gq4k1ptguh8mc.apps.googleusercontent.com";

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
        fetch(url, { method: "HEAD", mode: "no-cors" })
          .then(response => ({ url, success: true })),
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


  const clientId = "397134373244-87j1kio7cp710v29hf5gq4k1ptguh8mc.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  }, []);



  return (
    <div>
   
      {errorOccurred && <ErrorNotification message="An error occurred during login. Please try again." />}
      {wrongCredentials && <WrongNotification message="Wrong credentials. Please check your email and password." />}

      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

      <main className="login-box-container" data-aos="fade-up">
        <form className="login-form-container">
          <h3 className="login-heading">Login</h3>
          <div className="login-forms">
          <div class="coolinput">
          <label for="input" class="text">Email:</label>
  <input type="text" id="email" name="Username" placeholder="Email" className="input" />
</div>

<div className="coolinput">
<label for="input" class="text">Password:</label>

  <input type="password" id="password" name="Password" placeholder="Password" className="input" />
</div>
            <div className="login-buttons-container">
              <div className="login-btn-box">
                <a href="#" type="button"onClick={LoginUser} >
                  Login
                </a>
              </div>
              <div className="or-box">
  <div className="or-line"></div>
  <p className="or-text">OR</p>
  <div className="or-line"></div>
</div>
            <div className="login-btn-box google-btn-box">
          
           <GoogleLogin />
</div>
<button class="apple-button"> 
  <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path> </g></svg>
  Continue with Apple 
  </button>

  <button class="spotify-button"> 
  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 511.991"><path fill="#fff" fill-rule="nonzero" d="M255.998.003C114.616.003 0 114.616 0 255.997c0 141.385 114.616 255.994 255.998 255.994C397.395 511.991 512 397.386 512 255.997 512 114.624 397.395.015 255.994.015l.004-.015v.003zm117.4 369.22c-4.585 7.519-14.427 9.908-21.949 5.288-60.104-36.714-135.771-45.027-224.882-24.668-8.587 1.954-17.146-3.425-19.104-12.015-1.967-8.591 3.394-17.15 12.003-19.104 97.518-22.28 181.164-12.688 248.645 28.55 7.522 4.616 9.907 14.427 5.288 21.95l-.001-.001zm31.335-69.703c-5.779 9.389-18.067 12.353-27.452 6.578-68.813-42.298-173.703-54.548-255.096-29.837-10.556 3.187-21.704-2.761-24.906-13.298-3.18-10.556 2.772-21.68 13.309-24.891 92.971-28.208 208.551-14.546 287.574 34.015 9.385 5.779 12.35 18.067 6.575 27.441v-.004l-.004-.004zm2.692-72.584c-82.511-49.006-218.635-53.51-297.409-29.603-12.649 3.837-26.027-3.302-29.86-15.955-3.832-12.656 3.303-26.023 15.96-29.867 90.428-27.452 240.753-22.149 335.747 34.245 11.401 6.754 15.133 21.446 8.375 32.809-6.728 11.378-21.462 15.13-32.802 8.371h-.011z"/></svg> Continue with Spotify 
  </button>
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
