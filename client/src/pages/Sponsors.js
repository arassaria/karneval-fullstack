import React from "react";
import hachenburger from "../assets/hachenburger.png";
import stadtLogo from "../assets/stadt logo.png";
import esLogo from "../assets/logo-eventservice.png";

const Sponsors = () => {
  return (
    <div>
      <h3>Unsere Sponsoren</h3>
      <div className="LogoContainer">
        <img src={hachenburger} alt="Hachenburger Brauerei" />
        <img src={stadtLogo} alt="Karneval Montabaur" />
        <img
          src={esLogo}
          alt="Eventservice Mario Bachmeier"
          className="ESLogo"
        />
      </div>
    </div>
  );
};

export default Sponsors;
