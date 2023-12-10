// Roles.js
import React, { useEffect } from "react";
import "./roles.css";
import AOS from "aos";


function Roles() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <div id="main-content" className="unique-main-content" data-aos="fade-up">
      <div id="role-form">
        <h2 className="unique-h2">Role Management</h2>
        <div className="form">
          <div className="input-container unique-frame-role">
            <h3 className='headstyle'>Create a new role</h3>
            <form>
              <label htmlFor="new-role-name" className="label-role">
                Role Name:
              </label>
              <input
                type="text"
                id="new-role-name"
                name="new-role-name"
                className="input-role"
                required
              />
              <button
                type="button"
                onClick={() => createRole()}
                className="button-role button-create"
              >
                <span>Create Role</span>
              </button>
            </form>
          </div>

          <div className="input-container unique-frame-role">
            <h3 className="headstyle">Update a role</h3>
            <form>
              <label htmlFor="update-role-id" className="label-role">
                Role ID:
              </label>
              <input
                type="text"
                id="update-role-id"
                name="update-role-id"
                className="input-role"
                required
              />
              <label htmlFor="update-role-name" className="label-role">
                New Role Name:
              </label>
              <input
                type="text"
                id="update-role-name"
                name="update-role-name"
                className="input-role"
                required
              />
              <button
                type="button"
                onClick={() => updateRole()}
                className="button-role button-update"
              >
                <span>Update Role</span>
              </button>
            </form>
          </div>

          <div className="input-container unique-frame-role">
            <h3 className="headstyle">Show Roles</h3>
            <form>
              <button
                type="button"
                onClick={() => showRoles()}
                className="button-role button-show"
              >
                <span>Show Roles</span>
              </button>
            </form>
          </div>

          <div className="input-container unique-frame-role">
            <h3 className="headstyle">Delete Role</h3>
            <form>
              <label htmlFor="delete-role-id" className="label-role">
                Role ID:
              </label>
              <input
                type="text"
                id="delete-role-id"
                name="delete-role-id"
                className="input-role"
                required
              />
              <button
                type="button"
                onClick={() => deleteRole()}
                className="button-role button-delete"
              >
                <span>Delete Role</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
