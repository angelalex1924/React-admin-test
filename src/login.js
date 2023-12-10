import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link  } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import './login.css';

// Access from Home 
const Login = ({ onLogin }) => {
  const loginUrl = "http://192.168.1.76:8000/api/login";
  const navigate = useNavigate();
 
//Access from IEK
// const Login = ({ onLogin }) => {
//   const loginUrl = "http://172.16.0.155:8000/api/login";
//   const navigate = useNavigate();
 


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
      <main className="login-box-container" data-aos="fade-up">
        <form className="login-form-container">
          <h3 className="login-heading"><svg width="40px" height="40px" viewBox="0 0 20.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 3H5C3.89543 3 3 3.89543 3 5V7" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 8L16 10" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 8L8 10" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 16C9 16 10 17 12 17C14 17 15 16 15 16" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8L12 13L11 13" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 21H19C20.1046 21 21 20.1046 21 19V17" stroke="#000000" stroke-width="1.608" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> Login</h3>
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
                <Link style={{textDecoration: 'none'}} to="/register" >
                <a href="#" target="_blank">
                  <span> Register</span>
                </a>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );

  }
export default Login;
