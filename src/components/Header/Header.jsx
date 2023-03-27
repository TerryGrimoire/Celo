import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Burger({ helmet }) {
  return (
    <header className="flex padding-header justify-between align-center">
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      <Link to="/Services">
        <button className="CTA_home" type="button">
          Notre menu
        </button>
      </Link>
    </header>
  );
}

export default Burger;
