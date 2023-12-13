import React, { useEffect } from 'react';
import './WrongNotification.css'; // Εάν το αρχείο style.css βρίσκεται στον ίδιο φάκελο με αυτό το αρχείο

const WrongNotification = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const notification = document.querySelector('Wrong-notification');
      notification.style.opacity = '0';
      notification.style.visibility = 'hidden';
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Wrong-notification">
      <div className="Wrong-notification__body">
      <svg fill="#f30202" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"/><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"/></svg>
        Please check your credentials! 
      </div>
      <div className="Wrong-notification__progress"></div>
    </div>
  );
};

export default WrongNotification;
