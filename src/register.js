import React, { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './regstyle.css';
import AOS from "aos";

function Register() {
  const registerURL = "http://172.16.0.155:8000/api/register";

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
        toast.success("You have successfully registered", {
          position: "top-right",
          style: {
            background: "#4CAF50",
            color: "#fff", // Green background color
          },
        });
      } else {
        toast.error("Registration failed.", {
          position: "top-right",
          style: {
            background: "#FF0000",
            color: "#fff", // Red background color
          },
        });
      }
    } catch (error) {
      console.error("Error during Register:", error);
      toast.error("An error occurred during Register. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        style: {
          background: "#FF0000",
          color: "#fff",  // Red background color
        },
      });
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
      <main className="register-box" data-aos="fade-up">
        <form className="register-form">
          <h3 className="register-heading">Sign Up</h3>
          <div className="register-input-box">
            <input type="text" id="email" name="Email" placeholder="Email" />
            <ion-icon className="register-icon" name="mail" />
          </div>
          
          <div className="register-input-box">
            <input type="password" id="password" name="Password" placeholder="Enter your Password" />
            <ion-icon className="register-icon" name="lock-closed" />
          </div>
          <div className="register-input-box">
            <input type="password" id="password_confirmation" name="Password Confirmation" placeholder="Repeat Password" />
            <ion-icon className="register-icon" name="lock-closed" />
          </div>
          <div className="register-input-box">
            <input type="text" id="name" name="Name" placeholder="Name" />
            <ion-icon className="register-icon" name="person" />
          </div>
          <div className="register-buttons-container">
            <div className="register-btn-box">
              <a type="button" onClick={registerUser}>Register</a>
            </div>
          </div>
          <div className="register-register-container">
            <p>Already have an account?
              <a href="#" target="_blank">
                <span onClick={() => redirectToLogin()}> SignIn </span>
              </a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
