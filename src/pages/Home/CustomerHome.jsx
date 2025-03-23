import React from "react";
import Header from "../Home/header/header";
import Slider from "../Home/slider/slider";
import Footer from "../Home/footer/footer";
import Value from "../Home/value/value";
import Features from "./features/features";
import Contact from "./contact/contact";
import CTA from "./cta/Cta";
import ProductContainer from "../../panels/customer/products";

const CustomerHome = () => {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Features/>
      <ProductContainer/>
      <Value/>
      <Contact/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default CustomerHome;
