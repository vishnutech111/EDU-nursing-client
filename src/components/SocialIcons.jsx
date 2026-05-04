import React from "react";
import "./SocialIcons.css";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919567453535"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/edunursing.in?igsh=MXhzYXd4OXd6bHBzMw=="
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1G838GvQqk/"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FaFacebookF />
      </a>

    </div>
  );
};

export default SocialIcons;