// import React, { useEffect, useState } from "react";
// import "./Services.css";
// import axios from "axios";
// import { motion } from "framer-motion";

// const Services = () => {
//   const [universities, setUniversities] = useState([]);
//   const [selectedUni, setSelectedUni] = useState(null);

//   useEffect(() => {
//     fetchUniversities();
//   }, []);

//   const fetchUniversities = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/universities");
//       setUniversities(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="services-container">

//       {/* HERO */}
//       <div className="services-hero">
//         <div className="overlay"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Our Services
//         </motion.h1>
//       </div>

//       {/* COMPANY SERVICES */}
//       <div className="service-info">
//         <h2>What We Offer</h2>

//         <div className="service-cards">
//           <div className="card">
//             <h3>Nursing Admission Guidance</h3>
//             <p>
//               Complete support for BSc Nursing, GNM, PBBSc, and MSc Nursing admissions.
//             </p>
//           </div>

//           <div className="card">
//             <h3>University Tie-ups</h3>
//             <p>
//               Direct admission support in top universities across Tamil Nadu & Karnataka.
//             </p>
//           </div>

//           <div className="card">
//             <h3>Career Counseling</h3>
//             <p>
//               Expert advice to choose the right nursing course and college.
//             </p>
//           </div>

//           <div className="card">
//             <h3>End-to-End Support</h3>
//             <p>
//               From application to admission confirmation – we handle everything.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* UNIVERSITIES LIST */}
//       <div className="university-section">
//         <h2>Select University</h2>

//         <div className="university-list">
//           {universities.map((uni) => (
//             <motion.div
//               key={uni._id}
//               className="university-card"
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedUni(uni)}
//             >
//               {uni.name}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* DETAILS */}
//       {selectedUni && (
//         <motion.div
//           className="university-details"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <h2>{selectedUni.name}</h2>
//           <p><strong>State:</strong> {selectedUni.state}</p>
//           <p><strong>City:</strong> {selectedUni.city}</p>

//           <h3>Courses</h3>

//           <div className="course-list">
//             {selectedUni.courses.map((course, index) => (
//               <div className="course-card" key={index}>
//                 <h4>{course.courseName}</h4>
//                 <p>{course.institute}</p>
//                 <span>{course.category}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//     </div>
//   );
// };

// export default Services;



import React, { useEffect, useState } from "react";
import "./Services.css";

const carouselImages = [
  "https://images.unsplash.com/photo-1584515933487-779824d29309", // nursing
  "https://images.unsplash.com/photo-1581595219315-a187dd40c322", // hospital
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"  // medical students
];

const dummyBlogs = [
  {
    title: "Why Choose BSc Nursing?",
    desc: "BSc Nursing offers strong career opportunities in hospitals, abroad jobs, and government sectors...",
  },
  {
    title: "Top Nursing Colleges in India",
    desc: "Explore the best nursing colleges in Tamil Nadu and Karnataka with high placement success...",
  },
  {
    title: "Nursing Career Opportunities",
    desc: "Nursing graduates can work in hospitals, clinics, research centers, and international healthcare sectors...",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-page">

      {/* Vertical Carousel */}
      <div className="vertical-carousel">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`v-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="v-overlay">
          <h1>EduNursing Blog</h1>
          <p>Latest Updates & Nursing Career Insights</p>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Articles</h2>

        <div className="blog-grid">
          {dummyBlogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;