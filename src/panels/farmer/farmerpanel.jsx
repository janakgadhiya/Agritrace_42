import React, { useState } from "react";
import "./farmer.css";

const FarmerPanel = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "uploadPicture":
        return (
          <div className="panel-section">
            <h2>Upload Profile Picture</h2>
            <input type="file" accept="image/*" />
          </div>
        );
      case "uploadCertificate":
        return (
          <div className="panel-section">
            <h2>Upload Certificate</h2>
            <input type="file" accept="application/pdf" />
          </div>
        );
      default:
        return (
          <div className="panel-section">
            <h2>Update Profile</h2>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Phone Number" />
            <button>Update Profile</button>
          </div>
        );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("farmerLoggedIn");
    window.location.href = "/farmer";
  };

  return (
    <div className="farmer-panel-container">
      <aside className="farmer-sidebar">
        <img src="./farmer.jpg" alt="Farmer Avatar" className="farmer-avatar" />
        <h2>Farmer Panel</h2>
        <ul>
          <li onClick={() => setActiveSection("profile")}>Update Profile</li>
          <li onClick={() => setActiveSection("uploadPicture")}>Upload Picture</li>
          <li onClick={() => setActiveSection("uploadCertificate")}>Upload Certificate</li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>
      <main className="farmer-main">{renderSection()}</main>
    </div>
  );
};

export default FarmerPanel;
