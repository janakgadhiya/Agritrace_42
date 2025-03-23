import React, { useState } from "react";
import { FaUserCircle, FaBox, FaShoppingCart, FaTrash, FaStar } from "react-icons/fa";
import "./customer.css";

const itemList = [
  { name: "Wheat", price: "₹500/kg", image: "./wheat.jpg", farmer: "Rajesh Patel", rating: 4 },
  { name: "Rice", price: "₹300/kg", image: "./rice.jpeg", farmer: "Sunil Mehta", rating: 5 },
  { name: "Potatoes", price: "₹30/kg", image: "./potato.jpeg", farmer: "Priya Desai", rating: 3 },
  { name: "Tomatoes", price: "₹40/kg", image: "./tomato.jpeg", farmer: "Rakesh Chauhan", rating: 4 }
];

const CustomerPanel = () => {
  const [activeSection, setActiveSection] = useState("placeOrder");
  const [orders, setOrders] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    mobile: "",
    profileImage: "./default-profile.jpg"
  });

  const handleOrderClick = (item) => setSelectedItem(item);

  const confirmOrder = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    setOrders([
      ...orders,
      { ...selectedItem, deliveryDate: deliveryDate.toLocaleDateString(), customer: { ...customerDetails } }
    ]);
    setSelectedItem(null);
    setCustomerDetails({ name: "", address: "", mobile: "", profileImage: "./default-profile.jpg" });
  };

  const cancelOrder = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const handleProfileUpdate = () => {
    const updatedDetails = { ...customerDetails };
    setCustomerDetails(updatedDetails);
  };

  const handleLogout = () => {
    localStorage.removeItem("customerLoggedIn");
    window.location.href = "/customer";
  };

  const renderSection = () => {
    if (activeSection === "placeOrder") {
      return (
        <div className="panel-section">
          <h2>Place Order</h2>
          {itemList.map((item, idx) => (
            <div key={idx} className="item-card">
              <img src={item.image} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <p>{item.price}</p>
                <p>{item.farmer}</p>
                <div className="star-rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
              <button onClick={() => handleOrderClick(item)}>Order</button>
            </div>
          ))}
        </div>
      );
    } else if (activeSection === "reviewOrder") {
      return (
        <div className="panel-section">
          <h2>Review Orders</h2>
          {orders.length === 0 ? (
            <p>No orders placed yet.</p>
          ) : (
            <ul className="order-list">
              {orders.map((order, idx) => (
                <li key={idx}>
                  <div>
                    <strong>{order.name}</strong> - {order.price} <br />
                    Delivery Date: {order.deliveryDate} <br />
                    <small>Ordered by: {order.customer.name}</small>
                  </div>
                  <FaTrash
                    className="cancel-icon"
                    onClick={() => cancelOrder(idx)}
                    title="Cancel Order"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    } else if (activeSection === "profile") {
      return (
        <div className="panel-section">
          <h2>Profile</h2>
          <div className="profile-card">
            <img
              src={customerDetails.profileImage}
              alt="Profile"
              className="profile-image"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  profileImage: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Your Name"
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails({ ...customerDetails, name: e.target.value })
                }
              />
              <label>Address:</label>
              <input
                type="text"
                placeholder="Your Address"
                value={customerDetails.address}
                onChange={(e) =>
                  setCustomerDetails({ ...customerDetails, address: e.target.value })
                }
              />
              <label>Mobile:</label>
              <input
                type="text"
                placeholder="Your Mobile No."
                value={customerDetails.mobile}
                onChange={(e) =>
                  setCustomerDetails({ ...customerDetails, mobile: e.target.value })
                }
              />
            </div>
            <button onClick={handleProfileUpdate}>Update Profile</button>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="customer-panel-container">
        <aside className="customer-sidebar">
          <div className="admin-avatar">
            <FaUserCircle size={60} />
            <h3>Customer Panel</h3>
          </div>
          <ul>
            <li onClick={() => setActiveSection("placeOrder")}>
              <FaShoppingCart /> Place Order
            </li>
            <li onClick={() => setActiveSection("reviewOrder")}>
              <FaBox /> Review Order
            </li>
            <li onClick={() => setActiveSection("profile")}>
              <FaUserCircle /> Profile
            </li>
          </ul>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </aside>
        <main className="customer-main">{renderSection()}</main>
      </div>

      {selectedItem && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Enter Delivery Details</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={customerDetails.name}
              onChange={(e) =>
                setCustomerDetails({ ...customerDetails, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Address"
              value={customerDetails.address}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  address: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Location"
              value={customerDetails.location}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  location: e.target.value,
                })
              }
            />
            <select
              value={customerDetails.payment}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  payment: e.target.value,
                })
              }
            >
              <option value="">Select Payment Method</option>
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
            <button onClick={confirmOrder}>Confirm Order</button>
            <button
              onClick={() => setSelectedItem(null)}
              style={{ backgroundColor: "#f44336" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerPanel;
