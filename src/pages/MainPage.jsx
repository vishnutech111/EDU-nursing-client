// import React from "react";
// import "./About.css";
// import { motion } from "framer-motion";

// const AboutPage = () => {
//   return (
//     <div className="about-container">

//       {/* HERO SECTION */}
//       <div className="about-hero">
//         <div className="overlay"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           About EduNursing
//         </motion.h1>
//       </div>

//       {/* COMPANY SECTION */}
//       <div className="about-section">
//         <motion.div
//           className="about-text"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2>Who We Are</h2>
//           <p>
//             EduNursing is a trusted nursing domestic admission platform helping
//             students secure seats in top nursing colleges across Tamil Nadu and
//             Karnataka. We guide students through the complete admission process
//             with transparency and expert support.
//           </p>

//           <p>
//             We collaborate with leading universities like MGR University,
//             Rajeev Gandhi University, and Dhanalakshmi Srinivasan University
//             to provide the best opportunities for aspiring nurses.
//           </p>
//         </motion.div>

//         <motion.img
//           src="/assets/image.png"
//           alt="company"
//           className="about-img"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </div>

//       {/* ADMISSION SECTION */}
//       <div className="about-section reverse">
//         <motion.img
//           src="/assets/about2.jpg"
//           alt="admission"
//           className="about-img"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />

//         <motion.div
//           className="about-text"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2>Nursing Domestic Admission</h2>
//           <p>
//             We specialize in providing admission guidance for:
//           </p>

//           <ul>
//             <li>BSc Nursing</li>
//             <li>GNM (General Nursing & Midwifery)</li>
//             <li>PBBSc Nursing</li>
//             <li>MSc Nursing</li>
//           </ul>

//           <p>
//             Our team ensures a smooth and hassle-free admission process from
//             application to seat confirmation.
//           </p>
//         </motion.div>
//       </div>

//       {/* WHY CHOOSE US */}
//       <div className="features-section">
//         <h2>Why Choose EduNursing?</h2>

//         <div className="features">
//           <div className="card">
//             <h3>Trusted Guidance</h3>
//             <p>Experienced counselors for best career decisions.</p>
//           </div>

//           <div className="card">
//             <h3>Top Universities</h3>
//             <p>Direct admission support in reputed institutions.</p>
//           </div>

//           <div className="card">
//             <h3>100% Support</h3>
//             <p>Complete assistance from start to admission.</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AboutPage;

import React, { useEffect, useState } from "react";
import "./Main.css";
import { motion } from "framer-motion";
import vedio from "../assets/EDU INDIAN F OUT 1.mp4"
const slides = [
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "About EduNursing",
    desc: "Trusted Nursing Admission Platform in India",
  },
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    title: "Top Nursing Colleges",
    desc: "Tamil Nadu & Karnataka Admissions",
  },
  {
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
    title: "Build Your Career",
    desc: "Start Your Journey in Healthcare",
  },
];

const MainPage = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">

      {/* ===== Vertical Carousel ===== */}
      <div className="vertical-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`v-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="v-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== About Section ===== */}

      {/* <section className="about-section">
        <div className="about-container">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="EduNursing"
            />
          </div>

          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              EduNursing is a trusted nursing domestic admission platform
              dedicated to helping students secure seats in top nursing
              colleges across Tamil Nadu and Karnataka.
            </p>
            <p>
              We provide complete guidance for BSc Nursing, GNM, PBBSc,
              and MSc Nursing with full support.
            </p>
          </div>

        </div>
      </section> */}

<section className="about-section">
  <div className="about-container">

    {/* LEFT IMAGE */}
    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309"
        alt="EduNursing"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="about-content glass">
      <h2>Who We Are</h2>
      <p>
        EduNursing is a trusted nursing domestic admission platform dedicated
        to helping students secure seats in top nursing colleges across Tamil
        Nadu and Karnataka.
      </p>
      <p>
        We provide complete guidance for BSc Nursing, GNM, PBBSc, and MSc Nursing
        with full support.
      </p>
    </div>

  </div>
</section>



      {/* ===== Video Section ===== */}
<section className="video-section">
  <div className="video-container">

    <div className="video-text">
      <h2>Explore EduNursing</h2>
      <p>
        Watch how we help students achieve their dreams in the healthcare field.
        Get complete guidance for nursing admissions across top colleges.
      </p>
    </div>

    <div className="video-box">
      <video
      
        src={vedio}
        controls
        loop
      />
    </div>

  </div>
</section>

      {/* ===== Mission Vision ===== */}
      {/* <section className="mission-vision">
        <div className="mv-container">

          <div className="mv-box">
            <h3>Our Mission</h3>
            <p>
              Provide transparent and reliable admission guidance for students.
            </p>
          </div>

          <div className="mv-box">
            <h3>Our Vision</h3>
            <p>
              Become India's leading nursing admission platform.
            </p>
          </div>

        </div>
      </section> */}



      <section className="mission-vision">
  <div className="mv-container">

    <div className="mv-box">
      <h3>Our Mission</h3>
      <p>
        Provide transparent and reliable admission guidance for students.
      </p>
    </div>

    <div className="mv-box">
      <h3>Our Vision</h3>
      <p>
        Become India's leading nursing admission platform.
      </p>
    </div>

  </div>
</section>

      {/* ===== Why Us ===== */}
      {/* <section className="why-us">
        <h2>Why Choose EduNursing?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Trusted Guidance</h4>
            <p>Expert counseling for students.</p>
          </div>

          <div className="why-card">
            <h4>Top Colleges</h4>
            <p>Direct admission support.</p>
          </div>

          <div className="why-card">
            <h4>Complete Support</h4>
            <p>End-to-end assistance.</p>
          </div>

          <div className="why-card">
            <h4>Affordable</h4>
            <p>Transparent pricing.</p>
          </div>
        </div>
      </section> */}

   <section className="why-us">
  <h2>Why Choose EduNursing?</h2>

  <p className="why-subtitle">
    We are committed to guiding students with transparency, expertise, and
    complete support to build a successful career in the healthcare industry.
  </p>

  <div className="why-grid">

    <div className="why-item">
      <span className="icon">🎓</span>
      <div>
        <h4>Trusted Guidance</h4>
        <p>
          Our experienced counselors provide step-by-step guidance to help
          students choose the right course based on their goals and interests.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">🏥</span>
      <div>
        <h4>Top Colleges</h4>
        <p>
          We collaborate with reputed nursing colleges across Tamil Nadu and
          Karnataka to ensure quality education and career growth.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">🤝</span>
      <div>
        <h4>Complete Admission Support</h4>
        <p>
          From application form filling to final admission confirmation, we
          provide end-to-end assistance throughout the entire process.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">💰</span>
      <div>
        <h4>Affordable & Transparent</h4>
        <p>
          We maintain complete transparency in fees and provide cost-effective
          admission solutions with no hidden charges.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">📄</span>
      <div>
        <h4>Documentation Support</h4>
        <p>
          Get help with all required documents, verification processes, and
          submission to ensure a smooth admission experience.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">📞</span>
      <div>
        <h4>24/7 Student Support</h4>
        <p>
          Our team is always available to answer your queries and provide
          guidance whenever you need assistance.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">🌍</span>
      <div>
        <h4>Wide Network</h4>
        <p>
          Strong connections with multiple institutions help students access
          better opportunities and career paths.
        </p>
      </div>
    </div>

    <div className="why-item">
      <span className="icon">🚀</span>
      <div>
        <h4>Career Growth Focus</h4>
        <p>
          We don’t just focus on admission — we guide students toward long-term
          career success in the healthcare field.
        </p>
      </div>
    </div>

  </div>
</section>

    </div>
  );
};

export default MainPage;