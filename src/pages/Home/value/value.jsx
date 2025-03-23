import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaLeaf, FaSeedling, FaTractor, FaHandsHelping } from "react-icons/fa";
import "./value.css";

const Value = () => {
  const data = [
    {
      icon: <FaLeaf size={24} color="#4caf50" />,
      heading: "Sustainability",
      detail:
        "We are committed to environmentally-friendly practices that protect and preserve natural resources for future generations.",
    },
    {
      icon: <FaSeedling size={24} color="#4caf50" />,
      heading: "Innovation",
      detail:
        "Bringing cutting-edge technology and innovation to agriculture, helping farmers grow more efficiently and profitably.",
    },
    {
      icon: <FaTractor size={24} color="#4caf50" />,
      heading: "Empowerment",
      detail:
        "Empowering farmers and customers through knowledge sharing, tools, and better access to resources and markets.",
    },
    {
      icon: <FaHandsHelping size={24} color="#4caf50" />,
      heading: "Community Support",
      detail:
        "Building strong relationships with local communities and contributing to their growth and well-being.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="vleft">
          <div className="image-container">
            <img src="/value.jpg" alt="Our Value" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="otext">Our Value</span>
          <span className="ptext">Value We Give to You</span>

          <div className="custom-accordion">
            {data.map((item, i) => (
              <div
                key={i}
                className={`accordion-item ${activeIndex === i ? "expanded" : ""}`}
              >
                <div
                  className="accordion-header flexCenter"
                  onClick={() => toggleAccordion(i)}
                >
                  <div className="icon flexCenter">{item.icon}</div>
                  <span className="ptext">{item.heading}</span>
                  <div
                    className={`icon flexCenter arrow-icon ${activeIndex === i ? "rotate" : ""}`}
                  >
                    <MdOutlineArrowDropDown size={24} />
                  </div>
                </div>
                <div
                  className="accordion-panel"
                  style={{
                    maxHeight: activeIndex === i ? "200px" : "0px",
                  }}
                >
                  <p className="stext">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
