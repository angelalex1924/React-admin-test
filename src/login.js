import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './login.css';
import SocialIcons from './SocialIcons';
import ErrorNotification from './ErrorNotification';
import WrongNotification from './WrongNotification';


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
          
            <button class="google-button">
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" class="svg">
  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" class="blue"></path>
  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" class="green"></path>
  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" class="yellow"></path>
  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" class="red"></path>
</svg>
<span class="text">Sign in with Google</span>
</button>
</div>
<button class="apple-button"> 
  <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path> </g></svg>
  Continue with Apple 
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
