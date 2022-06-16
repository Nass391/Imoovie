import { useRef, useState } from "react";
import axios from "axios";


export default function AddUser({ closeModal }) {

  const formRef = useRef();

  async function addNewUser(params) {
    const {
      addUserUsername,
      addUserEmail,
      addUserPassword,
      addUserRole,
     } = formRef.current;
    const username = addUserUsername.value;
    const email = addUserEmail.value;
    const password = addUserPassword.value;
    const role = addUserRole.value;
    await axios.post("/api/addUser", {
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
          <h3>Add User</h3>
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
                  <input name="addUserUsername" type="text" />
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
                  <input name="addUserEmail" type="text" />
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
                  <input name="addUserPassword" type="text" />
                </div>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Role</label>
              </div>
              <div>
                <input name="addUserRole" type="text" />
              </div>
            </div>
            
            
          </form>
        </div>
        <div className="modal-footer">
          <button style={{ marginLeft: "0" }} onClick={() => closeModal()}>
            Cancel
          </button>
          <button
            className="btn"
            onClick={() => addNewUser()}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}