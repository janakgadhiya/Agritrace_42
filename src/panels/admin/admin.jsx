import React, { useState } from "react";
import "./admin.css";
import { FaUserTie, FaUsers, FaUserCircle, FaTrash } from "react-icons/fa";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const [farmers, setFarmers] = useState([
    { id: 1, name: "Farmer 1" },
    { id: 2, name: "Farmer 2" },
    { id: 3, name: "Farmer 3" },
  ]);

  const [customers, setCustomers] = useState([
    { id: 1, name: "Customer 1" },
    { id: 2, name: "Customer 2" },
    { id: 3, name: "Customer 3" },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "/admin";
  };

  const deleteFarmer = (id) => {
    setFarmers((prev) => prev.filter((farmer) => farmer.id !== id));
  };

  const deleteCustomer = (id) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
  };

  const renderSection = () => {
    if (activeSection === "farmers") {
      return (
        <div className="list-section">
          <h2>Farmers List</h2>
          <ul className="list-table">
            {farmers.map((farmer) => (
              <li key={farmer.id}>
                {farmer.name}
                <FaTrash
                  className="delete-icon"
                  onClick={() => deleteFarmer(farmer.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (activeSection === "customers") {
      return (
        <div className="list-section">
          <h2>Customers List</h2>
          <ul className="list-table">
            {customers.map((customer) => (
              <li key={customer.id}>
                {customer.name}
                <FaTrash
                  className="delete-icon"
                  onClick={() => deleteCustomer(customer.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Dashboard Overview</h1>
          <div className="stats">
            <div className="card farmers">
              <FaUserTie className="icon" />
              <p>Farmers</p>
              <h2>{farmers.length}</h2>
            </div>
            <div className="card customers">
              <FaUsers className="icon" />
              <p>Customers</p>
              <h2>{customers.length}</h2>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="admin-avatar">
          <FaUserCircle size={60} />
          <h3>Admin Panel</h3>
        </div>
        <ul>
          <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveSection("farmers")}>Farmers List</li>
          <li onClick={() => setActiveSection("customers")}>Customers List</li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>
      <main className="dashboard">{renderSection()}</main>
    </div>
  );
};

export default AdminPanel;
