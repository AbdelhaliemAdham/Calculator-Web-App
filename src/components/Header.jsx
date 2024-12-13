import React from "react";
import CalculatorImage from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={CalculatorImage} alt="Logo Image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
