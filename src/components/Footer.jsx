import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h3>EduNursing</h3>
          <p>
            EduNursing is a trusted platform helping students secure nursing
            admissions across top colleges in Tamil Nadu and Karnataka.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📍 Kozhikode, Kerala</li>
            <li>📞 9567453535</li>
            <li>📧 eduindiannursingacademy@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduNursing. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;