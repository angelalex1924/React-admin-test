// Permissions.js
import React, { useEffect } from "react";
 import './permission.css';
import AOS from "aos";
import SocialIcons from './SocialIcons';

function Permissions() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <div id="main-content" className="unique-main-content" data-aos="fade-up">
      
      <div className="role-form">
      <h2 className="unique-h2">Permission Management</h2>
      <div className="form">
      <div className="input-container unique-frame-role">
      
      <h3 className="headstyle"> Create a new Permission</h3>
            <form id="create-permission-form">
              <label htmlFor="new-permission-name" className="label-role">
                Permission Name:
              </label>
              <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                required
              />
              <button
                type="button"
                className="button-role button-create"
                // onClick={() => createPermission()}
              >
               <span>Create Permission</span>
              </button>
            </form>
          </div>
          <div className="input-container unique-frame-role">
          <h3 className="headstyle"> Update Permission</h3>
            <form id="create-permission-form">
            <label htmlFor="update-role-id" className="label-role">
                Permission ID:
                </label>
                <input
                type="text"
                id="update-permission-name"
                name="update-permission-name"
                className="input-role"
                required
              />
              <label htmlFor="update-permission" className="label-role">
                New Permission Name:
              </label>
              <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                required
              />
              <button
                type="button"
                className="button-role button-update"
                // onClick={() => updatePermission()}
              >
                Update Permission
              </button>
            </form>
          </div>

          <div className="input-container unique-frame-role">
          <h3 className="headstyle"> Show Permissions</h3>
            <form>
              <button
                type="button"
                // onClick={() => showPermissions()}
                className="button-role button-show"
              >
                <span>Show Permissions</span>
              </button>
            </form>
          </div>

          <div className="input-container unique-frame-role">
          <h3 className="headstyle">Delete Permission</h3>
            <form>
              <label htmlFor="delete-role-id" className="label-role">
                Permission ID:
              </label>
              <input
                type="text"
                id="delete-permission-id"
                name="delete-permission-id"
                className="input-role"
                required
              />
              <button
                type="button"
                // onClick={() => deleteRole()}
                className="button-role button-delete"
              >
                <span>Delete Permission</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
   
      
    
  );
}

export default Permissions;
