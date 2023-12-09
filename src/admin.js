import React from 'react';
import './admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Welcome to the Admin Panel</h1>
        <p>Empower your control, manage with ease.</p>
      </div>
      <div className="admin-content">
        <div className="admin-functions">
          <h2>Admin Functions:</h2>
          <div className="function-item">
            <span role="img" aria-label="shield">🛡️</span>
            <p>Ensure the security of your system with robust authentication measures.</p>
          </div>
          <div className="function-item">
            <span role="img" aria-label="chart">📊</span>
            <p>Monitor performance metrics and gain insights using advanced analytics.</p>
          </div>
          <div className="function-item">
            <span role="img" aria-label="user">👥</span>
            <p>Effortlessly manage user roles and permissions for seamless access control.</p>
          </div>
          <div className="function-item">
            <span role="img" aria-label="calendar">📅</span>
            <p>Schedule automated tasks and maintain a well-organized workflow.</p>
          </div>
        
        </div>
        <div className="admin-users">
          <h2> Example of how to use the Admin Panel</h2>
          <h3>User Management:</h3>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>john_doe</td>
                <td>john@example.com</td>
                <td>
                  <button className="button-role button-delete" onClick={() => alert('Delete user 1')}>Delete</button>
                </td>
              </tr>
              {/* Προσθέστε περισσότερους χρήστες αν χρειάζεστε */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
