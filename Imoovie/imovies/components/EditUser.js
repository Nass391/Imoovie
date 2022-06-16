import { useState, useRef } from "react";
import axios from "axios";

export default function EditUser({ closeModal, user }) {
  const formRef = useRef();
  
  async function editUser() {
    
    const {
      editUserUsername,
      editUserEmail,
      editUserPassword,
      editUserRole,
     } = formRef.current;
    const username = editUserUsername.value;
    const email = editUserEmail.value;
    const password = editUserPassword.value;
    const role = editUserRole.value;
    
    await axios.put("/api/editUser", {
      id: parseInt(user?.id),
      username,
      email,
      password,
      role,
     
    });
   
    window.location.reload();
  }

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit User</h3>
          <span
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => closeModal()}
          >
            X
          </span>
        </div>
        <div className="modal-body content">
          <form ref={formRef}>
            <div style={{ display: "flex", margin: "2px 2px 0 0" }}>
              <div
                style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Username</label>
                </div>
                <div>
                  <input
                    defaultValue={user?.username}
                    name="editUserUsername"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Email</label>
                </div>
                <div>
                  <input
                    defaultValue={user?.email}
                    name="editUserEmail"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Password</label>
                </div>
                <div>
                  <input
                    defaultValue={user?.password}
                    name="editUserPassword"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Role</label>
              </div>
              <div>
                <input
                  defaultValue={user?.role}
                  name="editUserRole"
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => closeModal()}>Cancel</button>
          <button  className="btn" onClick={() => editUser()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}