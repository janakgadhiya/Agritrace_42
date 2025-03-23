import React, { useState } from "react";  // Importing useState
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./Authentication/Login/Login";
import Signup from "./Authentication/Signup/Signup";
import Header from "./pages/Home/header/header";
import Slider from "./pages/Home/slider/slider";
import Footer from "./pages/Home/footer/footer";
import Value from "./pages/Home/value/value";
import Contact from "./pages/Home/contact/contact";
import Features from "./pages/Home/features/features";
import CTA from "./pages/Home/cta/Cta";
import AboutUs from "./pages/Home/Aboutus";
import ContactUs from "./pages/contactpage/contactus";
import AdminPanel from "./panels/admin/admin";
import AdminLogin from "./panels/admin/adminlogin";
import FarmerLogin from "./panels/farmer/farmerlogin";
import FarmerPanel from "./panels/farmer/farmerpanel";
import CustomerPanel from "./panels/customer/customerpanel";
import FarmerHome from "./pages/Home/FramerHome";
import CustomerHome from "./pages/Home/CustomerHome";

// ✅ Home Page
function Home() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Features />
      <Value />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

// ✅ Admin Login & Panel Wrapper
const AdminWrapper = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") === "true"
  );

  const handleAdminLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("adminLoggedIn", "true");
  };

  return loggedIn ? <AdminPanel /> : <AdminLogin onLogin={handleAdminLogin} />;
};

// ✅ Farmer Login & Panel Wrapper
const FarmerWrapper = () => {
  const [farmerLoggedIn, setFarmerLoggedIn] = useState(
    localStorage.getItem("farmerLoggedIn") === "true"
  );

  const handleFarmerLogin = () => {
    setFarmerLoggedIn(true);
    localStorage.setItem("farmerLoggedIn", "true");
  };

  return farmerLoggedIn ? (
    <FarmerPanel />
  ) : (
    <FarmerLogin onLogin={handleFarmerLogin} />
  );
};

// ✅ Router Setup
const router = createBrowserRouter([
  { path: "/", element: <LoginForm /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <Home /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/admin", element: <AdminWrapper /> },
  { path: "/farmer", element: <FarmerWrapper /> },
  { path: "/customer", element: <CustomerPanel /> },
  { path: "/farmer/home", element: <FarmerHome/> }, // Make sure FarmerHome is correctly imported
  { path: "/customer/home", element: <CustomerHome/>}, // Make sure CustomerHome is correctly imported
]);

// ✅ Main App
function App() {
  return <RouterProvider router={router} />;
}

export default App;
