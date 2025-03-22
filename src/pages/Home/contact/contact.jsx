import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left */}
        <div className="flexColStart cleft">
          <span className="otext">Our Contact</span>
          <span className="ptext">Easy to Contact Us</span>
          <span className="stext">
            We are always ready to help by providing the best services. <br />
            We believe a good place to live can make your life better.
          </span>

          <div className="flexColStart conmodes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} color="#4caf50" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="ptext">Call</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} color="#4caf50" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="ptext">Chat</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} color="#4caf50" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="ptext">Video Call</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} color="#4caf50" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="ptext">Message</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="cright">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
