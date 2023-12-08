import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import './login.css';

const Login = ({ onLogin }) => {
  const loginUrl = "http://172.16.0.155:8000/api/login";
  const navigate = useNavigate();

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
        console.log("test");
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
          },
        });

        onLogin();
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.", {
          position: "top-right",
          style: {
            background: "#FF0000",
            color: "#fff",
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
          color: "#fff",
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
      <main className="login-box-container" data-aos="fade-up">
        <form className="login-form-container">
          <h3 className="login-heading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none" id="my-svg">
  <defs><pattern id="a" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="scale(3.19) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,1)"/><path d="M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432" stroke-width="30" stroke="#FFECAF" fill="none"/><path d="M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432" stroke-width="30" stroke="#FFB07F" fill="none"/><path d="M-20.133 44.568C-13.178 44.932-6.452 47.376 0 50c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432" stroke-width="30" stroke="#FF52A2" fill="none"/><path d="M-20.133 64.568C-13.178 64.932-6.452 67.376 0 70c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432" stroke-width="30" stroke="#F31559" fill="none"/></pattern>
    <linearGradient id="gradient1">
      <stop class="stop1" offset="0%" stop-color="#8f66ff"/>
      <stop class="stop2" offset="100%" stop-color="#3d12ff"/>
    </linearGradient>
  </defs>
  
  <g id="group" transform="translate(0,0) scale(1)">
    <path d="M85.333 32.000H74.667C51.103 32.000 32.000 51.103 32.000 74.667V85.333M170.667 32.000H181.333C204.897 32.000 224.000 51.103 224.000 74.667V85.333M85.333 224.000H74.667C51.103 224.000 32.000 204.897 32.000 181.333V170.667M170.667 224.000H181.333C204.897 224.000 224.000 204.897 224.000 181.333V170.667M158.178 149.333C153.786 161.762 141.933 170.667 127.999 170.667C114.066 170.667 102.213 161.762 97.820 149.333M96.000 106.667L96.000 96.000M160.000 106.667V96.000" stroke="url(#a)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" id="solid"/>
  </g>
</svg> Login</h3>
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
                <a href="#" type="button" onClick={LoginUser}>
                  Login
                </a>
              </div>
            </div>
            <div className="login-register-container">
              <p>
                Don't have an account?
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
