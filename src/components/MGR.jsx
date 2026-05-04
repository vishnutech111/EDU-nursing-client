


// import React from "react";
// import "./University.css";

// const MGR = () => {
//   return (
//     <div className="details-page">

//       <h1>The Tamil Nadu Dr. M.G.R. Medical University</h1>
//       <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>

//       {/* ABOUT */}
//       <h3>About University</h3>
//       <p>
//         The Tamil Nadu Dr. M.G.R. Medical University is one of the premier medical 
//         universities in India, established to regulate and ensure high standards 
//         in medical and healthcare education across Tamil Nadu.
//       </p>

//       <p>
//         The university is recognized nationally and internationally for its 
//         excellence in nursing and medical education. It is affiliated with 
//         numerous top nursing colleges, providing students with strong academic 
//         knowledge, clinical exposure, and career opportunities.
//       </p>

//       {/* COURSES */}
//       <h3>Courses Offered</h3>
//       <ul>
//         <li>B.Sc Nursing (4 Years)</li>
//         <li>Post Basic B.Sc Nursing</li>
//         <li>M.Sc Nursing</li>
//       </ul>

//       {/* FEATURES */}
//       <h3>Key Features</h3>
//       <ul>
//         <li>Government-recognized medical university</li>
//         <li>Wide network of affiliated nursing colleges</li>
//         <li>Advanced curriculum with clinical training</li>
//         <li>Internship opportunities in top hospitals</li>
//         <li>High employability and career growth</li>
//       </ul>

//       {/* AFFILIATED COLLEGES */}
//       <h3>Top Affiliated Nursing Colleges (Coimbatore)</h3>

//       <div className="college-list">

//         <div className="college-card">
//           <h4>Nightingale Institute of Nursing Education</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing</p>
//         </div>

//         <div className="college-card">
//           <h4>Sai Institute of Nursing Education</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing (Girls)</p>
//         </div>

//         <div className="college-card">
//           <h4>Sai Institute of Nursing Education</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing (Boys)</p>
//         </div>

//         <div className="college-card">
//           <h4>Sri Lakshmi Group of Institution</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing (Boys)</p>
//         </div>

//         <div className="college-card">
//           <h4>Sri Lakshmi Group of Institution</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing</p>
//         </div>

//         <div className="college-card">
//           <h4>Ennam College of Nursing</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing</p>
//         </div>

//         <div className="college-card">
//           <h4>Annai Meenakshi College of Nursing</h4>
//           <p>📍 Coimbatore, Tamil Nadu</p>
//           <p>B.Sc Nursing</p>
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

// export default MGR;






import React from "react";
import "./Dhanalakshmi.css";

const MGR = () => {
  return (
    <div className="details-page">

      {/* 🔥 HERO */}
      <div className="uni-hero mgr-hero">
        <div className="uni-overlay">
          <h1>The Tamil Nadu Dr. M.G.R. Medical University</h1>
          <p>Chennai, Tamil Nadu</p>
        </div>
      </div>

      <div className="uni-container">

        {/* ABOUT */}
        <div className="glass-card">
          <h3>About University</h3>
          <p>
            The Tamil Nadu Dr. M.G.R. Medical University is one of the premier 
            medical universities in India, ensuring high standards in healthcare education.
          </p>

          <p>
            It is affiliated with top nursing colleges and provides strong academic 
            knowledge, clinical exposure, and excellent career opportunities.
          </p>
        </div>

        {/* COURSES */}
        <div className="glass-card">
          <h3>Courses Offered</h3>
          <ul>
            <li>B.Sc Nursing (4 Years)</li>
            <li>Post Basic B.Sc Nursing</li>
            <li>M.Sc Nursing</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div className="glass-card">
          <h3>Key Features</h3>
          <ul>
            <li>Government-recognized medical university</li>
            <li>Wide network of affiliated colleges</li>
            <li>Advanced clinical training</li>
            <li>Internships in top hospitals</li>
            <li>High employability</li>
          </ul>
        </div>

        {/* COLLEGES */}
        <div className="glass-card">
          <h3>Top Affiliated Nursing Colleges (Coimbatore)</h3>

          <div className="college-list">

            <div className="college-card">
              <h4>Nightingale Institute of Nursing Education</h4>
              <p>📍 Coimbatore</p>
              <p>B.Sc Nursing</p>
            </div>

            <div className="college-card">
              <h4>Sai Institute of Nursing Education</h4>
              <p>📍 Coimbatore</p>
              <p>B.Sc Nursing (Girls)</p>
            </div>

            <div className="college-card">
              <h4>Sai Institute of Nursing Education</h4>
              <p>📍 Coimbatore</p>
              <p>B.Sc Nursing (Boys)</p>
            </div>

            <div className="college-card">
              <h4>Sri Lakshmi Group of Institution</h4>
              <p>📍 Coimbatore</p>
              <p>B.Sc Nursing</p>
            </div>

            <div className="college-card">
              <h4>Ennam College of Nursing</h4>
              <p>📍 Coimbatore</p>
              <p>B.Sc Nursing</p>
            </div>

            <div className="college-card">
              <h4>Annai Meenakshi College of Nursing</h4>
              <p>📍 Coimbatore</p>
              <p>B.Sc Nursing</p>
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

export default MGR;