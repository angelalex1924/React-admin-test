import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';

const clientId = "397134373244-87j1kio7cp710v29hf5gq4k1ptguh8mc.apps.googleusercontent.com";

function GoogleLoginComponent({ onGoogleLoginSuccess }) {
  const navigate = useNavigate();
  const [isGoogleLoggedIn, setIsGoogleLoggedIn] = useState(false);
  const onSuccess = (res) => {
    
    console.log("Login success! Current User: ", res.profileObj);
    localStorage.setItem('googleAuthToken', res.tokenId);
 
    setIsGoogleLoggedIn(true);
    onGoogleLoginSuccess();
    navigate('/');
  }

  const onFailure = (error) => {
    if (error.error === 'popup_closed_by_user') {
      console.log('Google Sign-In popup closed by the user');
      setIsGoogleLoggedIn(false);

      // You can display a message to the user or take appropriate action
    } else {
      console.log('Login failed', error);
      // Handle other login failures
    }
  }
  

  const handleGoogleLoginClick = () => {
    // Trigger Google Login when your custom button is clicked
    const googleLoginButton = document.getElementById('google-login-button');
    googleLoginButton.click();

  }

  return (
    <div>
      {/* Your custom button */}
      <button className="google-button" onClick={handleGoogleLoginClick}>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" className="svg">
          <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" className="blue"></path>
          <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" className="green"></path>
          <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" className="yellow"></path>
          <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" className="red"></path>
        </svg>
        <span className="google-text">Continue with Google</span>
      </button>

      {/* Hidden Google Login component */}
      <GoogleLogin
  clientId={clientId}
  buttonText="Login"
  onSuccess={onSuccess}
  onFailure={onFailure}
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  render={(renderProps) => (
    <button
      id="google-login-button"
      onClick={renderProps.onClick}
      disabled={renderProps.disabled}
      style={{ display: 'none' }} // Hide the default Google Login button
    >
            {/* You can customize this button if needed */}
            Custom Google Login Button
          </button>
        )}
      />
    </div>
  );
}

export default GoogleLoginComponent;