import React, { useState } from "react";
import "./farmer.css";

const FarmerPanel = () => {
  const [activeSection, setActiveSection] = useState("updateProfile");
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    image: null,
    description: "",
  });

  const renderSection = () => {
    switch (activeSection) {
      case "reviewOrder":
        return (
          <div className="panel-section">
            <h2>Review Order</h2>
            {/* You can replace this static data with dynamic order data */}
            <div className="order-details">
              <p>Product: Wheat</p>
              <p>Price: ₹500/kg</p>
              <p>Farmer: Rajesh Patel</p>
              <button className="button">Confirm Order</button>
            </div>
          </div>
        );
      case "addProduct":
        return (
          <div className="panel-section">
            <h2>Add Product</h2>
            <input
              type="text"
              placeholder="Product Name"
              value={productDetails.name}
              onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price (per kg)"
              value={productDetails.price}
              onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProductDetails({ ...productDetails, image: e.target.files[0] })}
            />
            <textarea
              placeholder="Product Description"
              value={productDetails.description}
              onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
            />
            <button className="button">Add Product</button>
          </div>
        );
      case "updateProfile":
      default:
        return (
          <div className="panel-section">
            <h2>Update Profile</h2>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Phone Number" />
            <button className="button">Update Profile</button>
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
          <li onClick={() => setActiveSection("updateProfile")}>Update Profile</li>
          <li onClick={() => setActiveSection("addProduct")}>Add Product</li>
          <li onClick={() => setActiveSection("reviewOrder")}>Review Order</li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </aside>
      <main className="farmer-main">{renderSection()}</main>
    </div>
  );
};

export default FarmerPanel;
