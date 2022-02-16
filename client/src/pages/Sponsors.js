import React from "react";
import hachenburger from "../assets/hachenburger.png";
import stadtLogo from "../assets/stadt logo.png";
import esLogo from "../assets/logo-eventservice.png";
import kolbeAudio from "../assets/kolbe-audio.png";

const Sponsors = () => {
  return (
    <div>
      <h3>Unsere Sponsoren</h3>
      <div className="LogoContainer">
        <img src={hachenburger} alt="Hachenburger Brauerei" />
        <img src={stadtLogo} alt="Karneval Montabaur" />
        <a
          href="https://www.eventservice-mb.de"
          alt="Eventservice Mario Bachmeier"
        >
          <img
            src={esLogo}
            alt="Eventservice Mario Bachmeier"
            className="ESLogo"
          />
        </a>
        <a href="https://www.kolbe-audio.de" alt="Kolbe Audio">
          <img src={kolbeAudio} alt="Kolbe Audio" />
        </a>
      </div>
    </div>
  );
};

export default Sponsors;
