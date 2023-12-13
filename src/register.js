import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './regstyle.css';
import SocialIcons from './SocialIcons';
import ErrorNotification from './ErrorNotification';
import RegisterNotification from './RegisterNotification';

function Register() {
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const navigate = useNavigate();
  const registerURL = "http://192.168.1.76:8000/api/register";

  const registerUser = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password_confirmation = document.getElementById("password_confirmation").value;
    const name = document.getElementById("name").value;

    try {
      const response = await fetch(registerURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, password_confirmation, name, }),
      });

      if (response.ok) {
        setErrorOccurred(false); // Reset the error state
        setRegistrationSuccessful(true); // Set registration successful state

        toast.success("You have successfully registered", {
          position: "top-right",
          style: {
            background: "#4CAF50",
            color: "#fff", // Green background color
          },
        });
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.error("Error during Register:", error);
      setErrorOccurred(true);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div>
    
      {errorOccurred && <ErrorNotification message="An error occurred during registration. Please try again." />}
      {registrationSuccessful && <RegisterNotification message="You have successfully registered." />}
      <main className="register-box" data-aos="fade-up">
        <form className="register-form">
          <h3 className="login-heading">Sign Up</h3>
          <div className="login-username-container">
            <input type="text" id="email" name="Email" placeholder="Email" />
            <ion-icon className="register-icon" name="mail" />
          </div>
          
          <div className="login-username-container">
            <input type="password" id="password" name="Password" placeholder="Enter your Password" />
            <ion-icon className="register-icon" name="lock-closed" />
          </div>
          <div className="login-username-container">
            <input type="password" id="password_confirmation" name="Password Confirmation" placeholder="Repeat Password" />
            <ion-icon className="register-icon" name="lock-closed" />
          </div>
          <div className="login-username-container">
            <input type="text" id="name" name="Name" placeholder="Name" />
            <ion-icon className="register-icon" name="person" />
          </div>
          <div className="register-buttons-container">
          <div className="register-btn-box">
              <a type="button" onClick={registerUser}>Register</a>
            </div> 
          </div>
          <div className="login-btn-box or-box">
                <p className="or-text">OR</p>
              </div>
          <div className="login-btn-box google-btn-box">
  <button href="#" className="google-btn">
    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo"/>  Sign Up with Google
  </button>
</div>
          
          <div className="register-register-container">
            <p>Already have an account?
            <Link style={{textDecoration: 'none'}} to="/login" >
                <a href="#" target="_blank">
                  <span> Login </span>
                </a>
                </Link>
            </p>
          </div>
        </form>
      </main>
      <SocialIcons />
    </div>
  );
}

export default Register;
