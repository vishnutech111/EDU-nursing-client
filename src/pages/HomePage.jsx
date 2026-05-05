// import React from "react";
// import "./Home.css";
// import { motion } from "framer-motion";
// import AboutPage from "./AboutPage";

// const HomePage = () => {
//   return (
//     <div className="home-container">
      
//       {/* Overlay */}
//       <div className="overlay"></div>

//       {/* Content */}
//       <div className="home-content">
//         <motion.h1
//           initial={{ opacity: 0, y: -60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to EduNursing
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           Your Gateway to Top Nursing Colleges in Tamil Nadu & Karnataka
//         </motion.p>

//         <motion.button
//           className="explore-btn"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Explore Universities
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState,useRef, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Counter from "../components/Counter";
import h1 from "../assets/Dhanalakshmi.png";
import h2 from "../assets/MGR.png";
import h3 from "../assets/RGU.png";
import home from "../assets/home.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import {
  FaUserGraduate,
  FaUniversity,
  FaMoneyBill,
  FaPassport,
  FaBriefcase,
  FaGlobe,
  FaChartLine
} from "react-icons/fa";
import UniversityCard from "../components/UniversityCard";
import {  AnimatePresence } from "framer-motion";

const images = [
  home,
  home1,
  home2
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const servicesData = [
  {
    title: "Admission Guidance",
    desc: "Step-by-step support for nursing admissions.",
    icon: <FaUserGraduate />,
    details: [
      "College selection support",
      "Eligibility guidance",
      "Application process help",
      "Seat confirmation assistance",
    ],
  },
  {
    title: "Education Loan Assistance",
    desc: "Complete financial support guidance.",
    icon: <FaUniversity />,
    details: [
      "Bank loan processing",
      "Documentation support",
      "Low interest guidance",
      "Fast approval assistance",
    ],
  },
  {
    title: "Career Support",
    desc: "Job and placement assistance.",
    icon: <FaBriefcase />,
    details: [
      "Placement training",
      "Interview preparation",
      "Hospital job support",
      "Abroad opportunities",
    ],
  },
];


  

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

const imageRef = useRef();

 // 🎯 MOUSE PARALLAX + TILT
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    imageRef.current.style.transform = `
      rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };



  const points = [
    {
      icon: <FaUserGraduate />,
      title: "Expert Admission Guidance",
      content: "Complete support from application to final admission."
    },
    {
      icon: <FaUniversity />,
      title: "Top Universities",
      content: "We partner with globally recognized nursing institutions."
    },
    {
      icon: <FaMoneyBill />,
      title: "Affordable Fees",
      content: "Budget-friendly education with high quality."
    },
    {
      icon: <FaPassport />,
      title: "Education Loan Assistance",
      content: "Complete financial support guidance."
    },
    {
      icon: <FaBriefcase />,
      title: "Placement Support",
      content: "Career guidance and job opportunities."
    }
  ];



const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 sec

    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
  const cards = document.querySelectorAll(".university-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
}, []);



  return (
    <div className="home">

     

       <section className="carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === current ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="overlay">
          <h1>Start Your Nursing Career</h1>
          <p>
             Get admission in top nursing universities with expert guidance and
            100% support.
          </p>
          {/* <button>Explore Services</button> */}
          <Link to="/services">
    <button>Explore Services</button>
  </Link>
        </div>
      </section>



        {/* <section className="about">
  <div className="about-container">

   
    <div className="about-image">
      <div className="image-slider">
        <img src="/images/about1.jpg" alt="about1" />
        <img src="/images/about2.jpg" alt="about2" />
        <img src="/images/about3.jpg" alt="about3" />
      </div>
    </div>

    
    <div className="about-content">
      <h1 className="typing-text">Welcome to EduNursing</h1>

      <p className="fade-text">
        Indian Medical Institute of Nursing has a legacy of teaching, educating
        and nurturing students for more than 30 years in nursing education.
        We pride ourselves on excellence and holistic development, shaping
        students for both academic success and real-world careers.
      </p>

      <p className="fade-text delay">
        Our programs are affiliated and recognized by the Indian Nursing Council (INC),
        New Delhi and Punjab Nurses Registration Council, Mohali, ensuring
        top-quality education and global opportunities.
      </p>

      <Link to="/contact" className="btn primary">Read More</Link>
    </div>

  </div>
</section> */}


 <section className="second">
      <div className="second-container">

        {/* IMAGE SIDE */}
        <motion.div
          className="second-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="image-wrapper"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-slider">
              <img src={h1} alt="" />
              <img src={h2} alt="" />
              <img src={h3} alt="" />
            </div>

            {/* GLASS OVERLAY */}
            {/* <div className="glass-overlay"></div> */}
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          className="second-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="">Welcome to EduNursing</h1>

          <p>
            EduNursing provides expert guidance for nursing admissions across
            India. With years of experience, we ensure students get placed in
            the best colleges with complete support.
          </p>

          <p>
            We assist with admissions, loans, and career growth, helping you
            achieve your dream in healthcare.
          </p>

          <Link to="/about" className="btn primary">
            Read More
          </Link>
        </motion.div>
      </div>

      {/* ===== REGISTER BUTTON ===== */}
<div className="register-wrapper">
  <Link to="/contact">
  <button  className="register-btn">
    🚀 Register Now
  </button>
  </Link>
</div>
    </section>





      {/* ABOUT SHORT */}
       <section className="premium-about">

      <div className="premium-container">

        {/* IMAGE */}
        <motion.div 
          className="premium-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" alt="nursing" />
        </motion.div>

        {/* CONTENT */}
        <motion.div 
          className="premium-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Why Choose EduNursing?</h2>
          <p>Your trusted partner for nursing admissions in India & abroad.</p>

          {/* ACCORDION */}
          {points.map((item, index) => (
            <div key={index} className={`premium-card ${activeIndex === index ? "active" : ""}`}>

              <div className="premium-title" onClick={() => toggle(index)}>
                <span className="icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              {activeIndex === index && (
                <motion.div 
                  className="premium-body"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                >
                  <p>{item.content}</p>
                </motion.div>
              )}

            </div>
          ))}

        </motion.div>

      </div>

      

    





<div className="ultra-counter-wrapper">

  <div className="ultra-counter-section">
    <Counter target={1000} label="Students Enrolled" icon={<FaUserGraduate />} />
    <Counter target={50} label="Universities" icon={<FaUniversity />} />
    <Counter target={10} label="Countries" icon={<FaGlobe />} />
    <Counter target={95} label="Success Rate" icon={<FaChartLine />} />
  </div>

  {/* 🔥 REGISTER BUTTON */}
  <div className="register-btn-container">


    <Link to="/contact">
    
  
    <button
      className="register-btn"
      onClick={() => {
        document.getElementById("contact-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      🚀 Register Now
    </button>
    </Link>
  </div>

</div>
    </section>






<section className="universities">
  <h2>Top Universities</h2>

  <div className="card-container">
    <UniversityCard
      image={h1}
      name="Dhanalakshmi Srinivasan University"
      location="Tamil Nadu, India"
      description="Well-known university offering quality nursing education."
      link="/dhanalakshmi-university"
    />

    <UniversityCard
      image={h2}
      name="The Tamil Nadu Dr. M.G.R. Medical University"
      location="Chennai, India"
      description="Top medical university with recognized nursing programs."
      link="/mgr-university"
    />

    <UniversityCard
      image={h3}
      name="Rajiv Gandhi University of Health Sciences"
      location="Karnataka, India"
      description="Premier university with strong hospital training."
      link="/rajiv-gandhi-university"
    />
  </div>
</section>

     

      <section className="services">
      <h2>Our Services</h2>

    <div className="service-grid">
  {servicesData.map((service, index) => (
    <motion.div
      key={index}
      className={`service-box ${activeIndex === index ? "active" : ""}`}
      whileHover={{ scale: 1.05 }}
      onClick={() => toggleCard(index)}
    >
      <div className="icon">{service.icon}</div>

      <h3>{service.title}</h3>
      <p>{service.desc}</p>

      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            className="service-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul>
              {service.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</div>

{/* 🔥 REGISTER BUTTON */}
<div className="service-register-container">
  <Link to="/contact">
  <button
    className="service-register-btn"
   
  >
    🚀 Register Now
  </button>
  </Link>
</div>

      
    </section>







      {/* CTA */}
      {/* <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section> */}

      <section className="cta">
  <motion.div
    className="cta-content"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >

  
    <h2>Ready to Start Your Journey?</h2>

    <p className="cta-subtext">
      Get expert guidance for admissions, loans, and career support.
      Our team is ready to assist you at every step.
    </p>

    <div className="cta-buttons">
      <Link to="/contact" className="btn primary">Contact Us</Link>
      {/* <Link to="/services" className="btn secondary">Explore Services</Link> */}
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default HomePage;