


// import React from "react";
// import "./University.css";

// const Dhanalakshmi = () => {
//   return (
//     <div className="details-page">

//       <h1>Dhanalakshmi Srinivasan University</h1>
//       <p><strong>Location:</strong> Perambalur, Tamil Nadu, India</p>

//       {/* ABOUT */}
//       <h3>About University</h3>
//       <p>
//         Dhanalakshmi Srinivasan University is one of the well-established institutions 
//         in Tamil Nadu, located in Perambalur. It is known for its strong academic 
//         excellence and advanced infrastructure in healthcare education.
//       </p>

//       <p>
//         The university provides high-quality nursing education with modern laboratories, 
//         experienced faculty, and excellent hospital training facilities. Students gain 
//         real-time clinical exposure through affiliated hospitals, ensuring practical 
//         knowledge along with theoretical learning.
//       </p>

//       {/* COURSES */}
//       <h3>Courses Offered</h3>
//       <ul>
//         <li>B.Sc Nursing (4 Years)</li>
//         <li>M.Sc Nursing</li>
//         <li>GNM (General Nursing & Midwifery)</li>
//       </ul>

//       {/* FEATURES */}
//       <h3>Key Features</h3>
//       <ul>
//         <li>Modern laboratories and simulation centers</li>
//         <li>Experienced and qualified faculty</li>
//         <li>Strong hospital tie-ups for clinical training</li>
//         <li>Hostel facilities available</li>
//         <li>Affordable fee structure</li>
//         <li>High placement support</li>
//       </ul>

//       {/* OTHER NURSING COLLEGES */}
//       <h3>Other Nursing Institutions</h3>

//       <div className="college-list">

//         <div className="college-card">
//           <h4>Dhanalakshmi Srinivasan College of Nursing</h4>
//           <p>📍 Perambalur, Tamil Nadu</p>
//           <p>Course: B.Sc Nursing</p>
//         </div>

//         <div className="college-card">
//           <h4>Nightingale Institute of Nursing Education</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>Course: B.Sc Nursing</p>
//         </div>

//         <div className="college-card">
//           <h4>Sai Institute of Nursing Education</h4>
//           <p>📍 Tamil Nadu</p>
//           <p>Course: B.Sc Nursing (Girls)</p>
//         </div>

//       </div>

//       {/* APPLY */}
//       {/* <button className="apply-btn">Contact Now</button> */}
//       <a href="tel:+919567453535" className="apply-btn">
//   Contact Now
// </a>

//     </div>
//   );
// };

// export default Dhanalakshmi;

import React from "react";
import "./Dhanalakshmi.css";

const Dhanalakshmi = () => {
  return (
    <div className="details-page">

      {/* 🔥 HERO IMAGE */}
      <div className="uni-hero">
        <div className="uni-overlay">
          <h1>Dhanalakshmi Srinivasan University</h1>
          <p>Perambalur, Tamil Nadu</p>
        </div>
      </div>

      <div className="uni-container">

        {/* ABOUT */}
        <div className="glass-card">
          <h3>About University</h3>
          <p>
            Dhanalakshmi Srinivasan University is one of the well-established institutions 
            in Tamil Nadu, located in Perambalur. It is known for its strong academic 
            excellence and advanced infrastructure in healthcare education.
          </p>

          <p>
            The university provides high-quality nursing education with modern laboratories, 
            experienced faculty, and excellent hospital training facilities. Students gain 
            real-time clinical exposure through affiliated hospitals.
          </p>
        </div>

        {/* COURSES */}
        <div className="glass-card">
          <h3>Courses Offered</h3>
          <ul>
            <li>B.Sc Nursing (4 Years)</li>
            <li>M.Sc Nursing</li>
            <li>GNM (General Nursing & Midwifery)</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div className="glass-card">
          <h3>Key Features</h3>
          <ul>
            <li>Modern laboratories and simulation centers</li>
            <li>Experienced and qualified faculty</li>
            <li>Strong hospital tie-ups</li>
            <li>Hostel facilities available</li>
            <li>Affordable fee structure</li>
            <li>High placement support</li>
          </ul>
        </div>

        {/* COLLEGES */}
        <div className="glass-card">
          <h3>Other Nursing Institutions</h3>

          <div className="college-list">

            <div className="college-card">
              <h4>Dhanalakshmi Srinivasan College of Nursing</h4>
              <p>📍 Perambalur, Tamil Nadu</p>
              <p>Course: B.Sc Nursing</p>
            </div>

            <div className="college-card">
              <h4>Nightingale Institute of Nursing Education</h4>
              <p>📍 Coimbatore, Tamil Nadu</p>
              <p>Course: B.Sc Nursing</p>
            </div>

            <div className="college-card">
              <h4>Sai Institute of Nursing Education</h4>
              <p>📍 Tamil Nadu</p>
              <p>Course: B.Sc Nursing (Girls)</p>
            </div>

          </div>
        </div>

        {/* CONTACT */}
        <a href="tel:+919567453535" className="apply-btn">
          Contact Now
        </a>

      </div>
    </div>
  );
};

export default Dhanalakshmi;