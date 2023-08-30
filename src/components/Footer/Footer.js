import React from "react";
import footerLogo from "../../images/footerLogo.svg";
import "./Footer.style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={footerLogo} alt="Логотип" />
    </footer>
  );
}
