import React from "react";
import { Link } from "react-router-dom";
import cb from "../../assets/visa.png";
import mc from "../../assets/mc.png";
import tk from "../../assets/tickets.png";
import cheque from "../../assets/logo-cheque.gif";
import ticket from "../../assets/chequedej.png";
import facebook from "../../assets/facebook.svg";
import barket from "../../assets/barket.png";

function Footer() {
  return (
    <footer className="flex-col center padding1 footer ">
      <div>
        <h2>Moyens de paiement acceptés</h2>
        <div className="flex">
          <img src={cb} alt="mastercard logo" />
          <img src={mc} alt="tickets restaurants logo" />
          <img src={ticket} alt="tickets restaurants logo" />
          <img src={tk} alt="tickets restaurants logo" />
          <img src={cheque} alt="cheque accepté logo" />
        </div>
      </div>
      <div>
        <h2>Retrouver nous sur les réseaux</h2>
        <ul className="barket">
          <a href="https://www.facebook.com/pages/Via-Veneto-Pizza/118507218238458">
            <li>
              <img src={facebook} alt="logo de Facebook" />
            </li>{" "}
          </a>
          <a href="https://barket.re">
            <li>
              <img src={barket} alt="barket.re" />
            </li>
          </a>
        </ul>
      </div>

      <small>
        Designé et développé par le{"  "}
        <a
          href="https://grimoire-numerique.re/"
          target="_blank"
          rel="noreferrer"
          className="gn"
        >
          Grimoire Numérique
        </a>
      </small>
      <Link to="/Mentions">
        <small className="small">Mentions Légales</small>
      </Link>
    </footer>
  );
}

export default Footer;