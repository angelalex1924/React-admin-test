import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './login.css';

function Login() {
  const loginUrl = "http://ispconfig.local/api/login";

 const LoginUser = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      toast.success("Login successful!", {
        position: "top-right",
        style: {
          background: "#4CAF50",
          color: "#fff", // Green background color
        },
      });
    } else {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        style: {
          background: "#FF0000", 
          color: "#fff", // Red background color
        },
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("An error occurred during login. Please try again.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    
      style: {
        background: "#FF0000",
        color: "#fff",  // Red background color
      },
    });
  }
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
      <main className="login-box-container">
        <form className="login-form-container">
          <h3 className="login-heading">Login</h3>
          <div className="login-forms">
            <div className="login-username-container">
              <input type="text" id="email" name="Username" placeholder="Email" />
              <ion-icon className="login-icon" name="person" />
            </div>
            <div className="login-password-container">
              <input type="password" id="password" name="Password" placeholder="Password" />
              <ion-icon className="login-icon" name="lock-closed" />
            </div>
            <div className="login-buttons-container">
              
              <div className="login-btn-box">
                <a href="#" type="button" onClick={LoginUser}>Login</a>
              </div>
              
            </div>
            <div className="login-register-container">
              <p>Don't have an account?
                <a href="#" target="_blank">
                  <span onClick={() => redirectToSignUp()}> Register</span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
