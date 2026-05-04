import React from "react";
import "./TopBar.css";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">

      {/* LEFT SIDE */}
      <div className="topbar-left">
        <span><FaPhone /> +91 9567453535</span>
        <span><FaEnvelope /> edunursing@gmail.com</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="topbar-right">

        <a href="https://wa.me/919567453535" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a href="https://www.instagram.com/edunursing.in?igsh=MXhzYXd4OXd6bHBzMw==" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.facebook.com/share/1G838GvQqk/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>

      </div>

    </div>
  );
};

export default TopBar;