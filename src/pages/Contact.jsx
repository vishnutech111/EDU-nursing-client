import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Message Sent Successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">

      {/* HERO */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h1>
      </div>

      {/* MAIN SECTION */}
      <div className="contact-content">

        {/* LEFT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Get In Touch</h2>

          <p>
            Reach out to EduNursing for nursing admission guidance in Tamil Nadu
            and Karnataka. Our team is ready to assist you.
          </p>

          <p><strong>📍 Location:</strong> Tamil Nadu & Karnataka</p>
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> edunursing@gmail.com</p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp"
            >
              WhatsApp
            </a>

            <a
              href="mailto:edunursing@gmail.com"
              className="btn email"
            >
              Email Us
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </motion.form>

      </div>

    </div>
  );
};

export default Contact;