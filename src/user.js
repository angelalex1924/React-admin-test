import React from "react";
import './user.css';

function User()
{
    return(
<div>  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="roles.css" />
        <style dangerouslySetInnerHTML={{__html: "\n  \n  " }} />
        <div id="main-content">
          <div id="role-form">
            <h2>User Management</h2>
            {/* Option 1: Create a new role */}
            <div className="frame">
              <h3>Create a new Permission</h3>
              <form id="create-role-form">
                <label htmlFor="new-role-name">Permission Name:</label>
                <input type="text" id="new-role-name" name="new-role-name" required />
                <button type="button" onclick="createRole()">Submit</button>
              </form>
            </div>
            {/* Option 2: Show roles */}
            <div className="frame">
              <h3>Show Permissions</h3>
              <button type="button" onclick="showRoles()">Show Permissions</button>
            </div>
            {/* Option 3: Update a role */}
            <div className="frame">
              <h3>Update a Permisison</h3>
              <form id="update-role-form">
                <label htmlFor="update-role-id">Permission ID:</label>
                <input type="text" id="update-role-id" name="update-role-id" required />
                <label htmlFor="update-role-name">New Permission Name:</label>
                <input type="text" id="update-role-name" name="update-role-name" required />
                <button type="button" onclick="updateRole()">Update Permisison</button>
              </form>
            </div>
            {/* Option 4: Delete a role */}
            <div className="frame">
              <h3>Delete a Permission</h3>
              <form id="delete-role-form">
                <label htmlFor="delete-role-id">Permisison ID:</label>
                <input type="text" id="delete-role-id" name="delete-role-id" required />
                <button type="button" onclick="deleteRole()">Delete Permisison</button>
              </form>
            </div>
          </div>
        </div>

</div>
        )
    }
    
    export default User;