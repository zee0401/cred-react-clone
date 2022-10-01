import React from "react";
import "../../index.css";
import Button from "../Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-label">
        <div>
          pay credit card bill. earn guaranteed ₹200 back.
          <span className="claim">
            claim now
            <img
              className="claim-arrow"
              alt="arrow"
              src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            />
          </span>
        </div>
      </div>
      <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download Cred" />
      </div>
    </div>
  );
};

export default HeroSection;
