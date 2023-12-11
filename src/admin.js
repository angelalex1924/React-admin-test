import React from 'react';
import './admin.css';
import SocialIcons from './SocialIcons';


const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Welcome to the Admin Panel</h1>
        <p className='admin-par'>Empower your control, manage with ease.</p>
      </div>
      <div className="admin-content">
        <div className="admin-functions">
          <h2>Admin Functions:</h2>
          <div className="function-item">
            <span role="img" aria-label="shield">🛡️</span>
            <p className='admin-par'>Ensure the security of your system with robust authentication measures.</p>
          </div>
          <div className="function-item">
            <span role="img" aria-label="chart">📊</span>
            <p className='admin-par'> Monitor performance metrics and gain insights using advanced analytics.</p>
          </div>
          <div className="function-item">
            <span role="img" aria-label="user">👥</span>
            <p className='admin-par'>Effortlessly manage user roles and permissions for seamless access control.</p>
          </div>
          <div className="function-item">
            <span role="img" aria-label="calendar">📅</span>
            <p className='admin-par'>Schedule automated tasks and maintain a well-organized workflow.</p>
          </div>
        
        </div>
        <div className="admin-users">
          <h2> Example of how to use the Admin Panel</h2>
          <h3>User Management (Remove Role from User):</h3>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Role ID</th>
                <th>Action</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>  <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                placeholder='User ID'
                required
              /></td>
                <td>  <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                placeholder='Role ID'
                required
              /></td>

                <td>
                  <button className="button-role button-delete" onClick={() => alert('Role removed successfully!')}>Remove Role</button>
                </td>
              </tr>
              
              {/* Προσθέστε περισσότερους χρήστες αν χρειάζεστε */}
            </tbody>
          </table>
          <h3>Role Management(Create new Role):</h3>
          <table>
            <thead>
              <tr>
                <th>Role Name</th>
                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                placeholder='New Role'
                required
              />
           </td>
                <td>
                  <button className="button-role button-create" onClick={() => alert('Role Created!')}>Create Role</button>
                </td>
              </tr>
    
            </tbody>
          </table>
          <h3>Permission Management(Update a Permission):</h3>
          <table>
            <thead>
              <tr>
                <th>Permission ID</th>
                <th>New Permission Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>  <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                placeholder='Permission ID'
                required
              /></td>
                <td>  <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                placeholder='New Permission Name'
                required
              /></td>
                <td>
                  <button className="button-role button-show" onClick={() => alert('Permission Updated successfully!')}>Update Permission</button>
                </td>
              </tr>
    
            </tbody>
          </table>
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Admin;
