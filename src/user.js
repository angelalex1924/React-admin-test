// User.js
import AOS from "aos";
import "./permission.css";
import React, { useEffect } from "react";


function User() {
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
      <h2 className="unique-h2">User Management</h2>
      <div className="form">
      <div className="input-container unique-frame-role">
      
            <h3>Assign Role to User</h3>
            <form id="create-permission-form">
              <label htmlFor="new-permission-name" className="label-role">
                Role Name:
              </label>
              <input
                type="text"
                id="new-permission-name"
                name="new-permission-name"
                className="input-role"
                required
              />
              <label htmlFor="new-permission-name" className="label-role">
                User ID:
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
                onClick={() => createPermission()}
              >
               <span>Assign Role</span>
              </button>
            </form>
          </div>
          

          <div className="input-container unique-frame-role">
            <h3>Show Roles of a User</h3>
            <form>
            <label htmlFor="update-permission" className="label-role">
                User ID:
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
                onClick={() => showPermissions()}
                className="button-role button-show"
              >
                <span>Show Roles</span>
              </button>
            </form>
          </div>

          <div className="input-container unique-frame-role">
            <h3>Remove Role from User</h3>
            <form>
              <label htmlFor="delete-role-id" className="label-role">
                Role ID:
              </label>
              <input
                type="text"
                id="delete-permission-id"
                name="delete-permission-id"
                className="input-role"
                required
              />
              <label htmlFor="delete-role-id" className="label-role">
                User ID:
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
                onClick={() => deleteRole()}
                className="button-role button-delete"
              >
                <span>Remove Role</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
   
      
    
  );
}

export default User;
