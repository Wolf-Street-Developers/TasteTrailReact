import { useEffect, useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import { getUserRoles, setAvatar } from "../api/userService";
import "./User.css";

const User = () => {
  const [user, setUser] = useState();
  const [chosenFile, setChosenFile] = useState()
  useEffect(() => {
    getUserRoles().then((u) => {
      setUser(u.data.user);
      console.log(u.data.user);
    });
  }, []);

  const handleFile = (event) => {
    setAvatar(event.target.files[0]);
    setChosenFile(event.target.files[0]);
  };

  return (
    <div className="user-page">
      <header className="user-header">
        <div className="user-welcome">
          <h2>Welcome, {user?.userName || "User"}</h2>
          <span>{new Date().toDateString()}</span>
        </div>
      </header>

      <div className="user-profile">
        <div className="profile-card">
          <Avatar avatar={(chosenFile && URL.createObjectURL(chosenFile)) || user?.avatarPath} size="large" />
          <div className="profile-info">
            <h3>{user?.userName || "User Name"}</h3>
          </div>
          <label onChange={handleFile} htmlFor="formId">
          <input name="" type="file" id="formId" hidden accept="image/*" /> 
          <div className="edit-image-btn"> 
            Edit Image 
          </div> 
          </label>
        </div>

        <div className="profile-details">
          <div className="detail-row">
            <strong>Email</strong>
            <span>{user?.email || "Not provided"}</span>
          </div>
          <div className="detail-row">
            <strong>Account Status</strong>
            <span>{user?.isBanned ? "Banned" : "Active"}</span>
          </div>
          <div className="detail-row">
            <strong>Mute Status</strong>
            <span>{user?.isMuted ? "Muted" : "Not Muted"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
