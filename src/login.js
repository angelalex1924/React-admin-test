import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link  } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import './login.css';
import SocialIcons from './SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';



// Access from Home 
// const Login = ({ onLogin }) => {
//   const loginUrl = "http://192.168.1.76:8000/api/login";
//   const navigate = useNavigate();
 
// Access from IEK
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
            theme:"colored",
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
