import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './login.css';
import SocialIcons from './SocialIcons';
import ErrorNotification from './ErrorNotification';
import WrongNotification from './WrongNotification';
import {GoogleLogin} from 'react-google-login';

const Login = ({ onLogin }) => {
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();
  const loginUrl = "http://192.168.1.76:8000/api/login";
  const clientid = "934283614989-l02fh32jakkeuupin2nmmmtlrdvg2uu7.apps.googleusercontent.com";
  
  //const loginUrl = "http://172.16.0.155:8000/api/login";

  const LoginUser = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("hasShownWelcomeMessage", "true");

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setErrorOccurred(false); // Reset the error state
        setWrongCredentials(false); // Reset the wrong credentials state
        const data = await response.json();
        const token = data.access_token;

        localStorage.setItem("token", token);

        toast.success("Login successful!", {
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
            theme: "colored",
          },
        });

        onLogin();
        navigate("/");
      } else if (response.status === 401) {
        setWrongCredentials(true); // Set wrong credentials state
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.error("Error during login:", error);

      if (error.message === "Failed to fetch") {
        setErrorOccurred(true); // Network error or API unreachable
      } else {
        setErrorOccurred(false); // Reset the error state for other errors (e.g., server error)
      }
    }
  };

  useEffect(() => {
    if (wrongCredentials) {
      const timeoutId = setTimeout(() => {
        setWrongCredentials(false); // Reset the wrong credentials state after a delay
      }, 3000); // Adjust the delay as needed (3000 milliseconds = 3 seconds)

      return () => clearTimeout(timeoutId); // Cleanup the timeout if the component unmounts or the effect is re-run
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
    // Handle the Google Sign-In response here
    // You can extract user details like response.profileObj.email, response.profileObj.name, etc.
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
    </div>
  );

  }
export default Login;
