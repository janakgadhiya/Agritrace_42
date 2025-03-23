import React from "react";
import Slider from "../Home/slider/slider";
import Footer from "../Home/footer/footer";
import Value from "../Home/value/value";
import Contact from "./contact/contact";
import CTA from "./cta/Cta";
import Header from "./header/header";

const FarmerHome = () => {
  return (
    <div className="App">
      <Header/>
      <Slider />
      <Value />
      <Contact/>
      <CTA/>
      <Footer />
    </div>
  );
};

export default FarmerHome;
