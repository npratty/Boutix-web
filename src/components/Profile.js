import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");

  return (
    <div style={{ display: " block ", height: " 100h " }}>
      <div className="profile-view">
        <div className="profile-view-div">
          <div className="profile-heading-border">
            <h3 style={{ fontWeight: "bold" }}> Account Information</h3>
          </div>
          <div className="info-pw-view">
            <div className="label-width">
              <label>Full name</label>
            </div>
            <input
              className="profile-input"
              //   value={"name"}
              placeholder="FullName"
              type="text"
            />
          </div>
          <div className="info-pw-view">
            <div className="label-width">
              {" "}
              <label>Email</label>
            </div>
            <input
              className="profile-input"
              //   value={"email"}
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="profile-button">
            {" "}
            <a
              className="profile-button gx-btn gx-btn-indigo"
            >
              Save Changes
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div className="profile-view-div">
          <div className="profile-heading-border">
            <h3 style={{ fontWeight: "bold" }}>Change your password</h3>
          </div>{" "}
          <div className="info-pw-view">
            <div className="label-width">
              {" "}
              <label>Current password</label>
            </div>
            <input
              className="profile-input"
              placeholder="Current password"
              type="password"
            />
          </div>
          <div className="info-pw-view">
            <div className="label-width">
              {" "}
              <label>New password</label>
            </div>
            <input
              className="profile-input"
              placeholder="New password"
              type="password"
            />
          </div>
          <div className="info-pw-view">
            <div className="label-width">
              {" "}
              <label>Re-enter new password</label>
            </div>
            <input
              className="profile-input"
              placeholder="Confirm password"
              type="password"
            />
          </div>
          <div className="profile-button">
            {" "}
            <a
              className="gx-btn gx-btn-indigo profile-button"
            >
              Change Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
