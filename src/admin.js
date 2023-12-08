import React from 'react';
import './admin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Admin = () => {
  return (
    <div className="admin-container">
      <div className="promo-banner">
        <h1>🚀 Welcome to the Ultimate Control Center! 🌟</h1>
        <p>Unleash the Power of Admin Excellence with Mind-Blowing Animations!</p>
      </div>
      <div className="admin-content">
        <div className="admin-section" data-aos="fade-up">
          <h2>👑 Roles</h2>
          <div className="admin-widget">
            <p>Role: Administrator</p>
            <p>Role: Moderator</p>
          </div>
        </div>
        <div className="admin-section" data-aos="fade-up" data-aos-delay="100">
          <h2>👤 Users</h2>
          <div className="admin-widget">
            <p>User: John Doe</p>
            <p>User: Jane Smith</p>
          </div>
        </div>
        <div className="admin-section" data-aos="fade-up" data-aos-delay="200">
          <h2>🛡️ Permissions</h2>
          <div className="admin-widget">
            <p>Total Users: 256</p>
            <p>Active Sessions: 20</p>
          </div>
        </div>
      </div>
      <div className="admin-instructions" data-aos="fade-up" data-aos-delay="300">
        <p>🌈 Elevate Your Experience!</p>
        <p>Explore the dynamic widgets with mesmerizing animations and unleash the true power of control.</p>
        <p>Hover over elements for surprises and dive into a world of admin brilliance! 🌐</p>
      </div>
    </div>
  );
};

export default Admin;
