import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-info">
          <a href="mailto:silcheralan@gmail.com"><FaEnvelope size={30}/></a>
          <a href="https://www.linkedin.com/in/alan-silcher-456902271/"><FaLinkedin size={30}/></a>
        </div>
      </footer>
    </div>
  );
}
