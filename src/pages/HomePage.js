import React from "react";
import FeelSpecial from "../components/FeelSpecial";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductShowCase from "../components/ProductShowCase.js";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
    </div>
  );
};

export default HomePage;
