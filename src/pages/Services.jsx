


// import React, { useEffect, useState } from "react";
// import "./Services.css";
// // import { motion } from "framer-motion";
// import vedio from "../assets/EDU INDIAN F OUT 1.mp4"
// const slides = [
//   {
//      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
//      title: "BSc Nursing",
//      desc: "Top colleges with full admission guidance",
//    },
//    {
//      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
//      title: "GNM Nursing",
//      desc: "Affordable diploma nursing programs",
//    },
//    {
//      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
//     title: "MSc Nursing",
//     desc: "Advance your healthcare career",
//   },
//    {
//      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
//      title: "Admission Support",
//      desc: "Complete end-to-end guidance",
//   },
// ];

// const Services = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="srv-page">

//       {/* ===== Vertical Carousel ===== */}
//       <div className="vertical-carousel">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`v-slide ${index === current ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="v-overlay">
//               <h1>{slide.title}</h1>
//               <p>{slide.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

      
// </div>
//   );
// };

// export default Services;



import React, { useEffect, useState, useRef } from "react";
import "./Services.css";
import h1 from "../assets/Dhanalakshmi.png";
import h2 from "../assets/MGR.png";
import h3 from "../assets/RGU.png";
import s from  "../assets/serviceimg.png"
import s1 from "../assets/serviceimg1.png"
import s2 from "../assets/serviceimg2.png"
import s3 from "../assets/serviceimg3.png"
import UniversityCard from "../components/UniversityCard";
import UniversityTable from "../components/UniversityTable";
const slides = [
  {
    image: s1,
    title: "BSc Nursing",
    desc: "Top colleges with full admission guidance",
  },
  {
    image: s,
    title: "GNM Nursing",
    desc: "Affordable diploma nursing programs",
  },
  {
    image: s2,
    title: "MSc Nursing",
    desc: "Advance your healthcare career",
  },
  {
    image: s3,
    title: "Admission Support",
    desc: "Complete end-to-end guidance",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 3D rotate on scroll
  useEffect(() => {
    const handleScroll = () => {
      const rotate = window.scrollY * 0.05;
      if (imageRef.current) {
        imageRef.current.style.transform = `rotateY(${rotate}deg) rotateX(${rotate / 2}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 10000);

  return () => clearInterval(interval);
}, []);


useEffect(() => {
  const handleScroll = () => {
    const cards = document.querySelectorAll(".uni-card img");

    cards.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visible = 1 - Math.abs(rect.top / windowHeight);

      let scale = 1 + visible * 0.15; // smooth zoom
      img.style.transform = `scale(${scale})`;
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="srv-page">

      {/* ===== Carousel ===== */}
     <div className="horizontal-carousel">
  <div
    className="h-track"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div
        key={index}
        className="h-slide"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="h-overlay">
          <h1>{slide.title}</h1>
          <p>{slide.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* ===== EduNursing Service Section ===== */}
      <section className="edu-section">

        <div className="edu-container">

          {/* LEFT CONTENT */}
          <div className="edu-content">
            <h2>EduNursing Admission Services</h2>

            <p>
              EduNursing is a leading nursing admission guidance platform in India,
              helping students secure seats in top nursing colleges across Tamil Nadu,
              Karnataka, and other states. With years of experience in the education
              sector, we provide complete support for students who want to build a
              successful career in the healthcare industry.
            </p>

            <p>
              Our services are designed to simplify the admission process and ensure
              that students make the right decisions for their future. From selecting
              the best college to completing documentation and securing admission,
              our expert team guides you at every step.
            </p>

            <ul>
              <li>✔ BSc Nursing Admission Guidance</li>
              <li>✔ GNM & Diploma Nursing Programs</li>
              <li>✔ MSc Nursing Advanced Courses</li>
              <li>✔ Direct Admission in Top Colleges</li>
              <li>✔ Education Loan Assistance</li>
              <li>✔ Hostel & Accommodation Support</li>
              <li>✔ Career Counseling & Placement Guidance</li>
              <li>✔ 100% Transparent Process</li>
            </ul>

            <p>
              We collaborate with reputed universities and institutions to provide
              students with high-quality education and practical clinical exposure.
              Our goal is to ensure that every student achieves academic excellence
              and builds a strong foundation for a successful nursing career.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="edu-image" ref={imageRef}>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="EduNursing"
            />
          </div>

        </div>
      </section>





    <section className="uni-section">
  <h2 className="uni-title">Top Universities</h2>

  <div className="uni-scroll">

    <div className="">
     <UniversityCard
      image={h1}
      name="Dhanalakshmi Srinivasan University"
      location="Tamil Nadu, India"
      description="Well-known university offering quality nursing education."
      link="/dhanalakshmi-university"
    />
    </div>

    <div className="">
     <UniversityCard
      image={h2}
      name="The Tamil Nadu Dr. M.G.R. Medical University"
      location="Chennai, India"
      description="Top medical university with recognized nursing programs."
      link="/mgr-university"
    />
    </div>

    <div className="">
      <UniversityCard
      image={h3}
      name="Rajiv Gandhi University of Health Sciences"
      location="Karnataka, India"
      description="Premier university with strong hospital training."
      link="/rajiv-gandhi-university"
    />
    </div>

  </div>
</section>

<UniversityTable />
    </div>
    
  );
};

export default Services;