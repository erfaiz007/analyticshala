import { Link } from "react-router-dom";
import "./workshopDetails.css";

const WorkshopDetails = () => {
  return (
    <div className="WorkshopDetails_wrapper">
      {/* HERO BANNER */}
      <div className="banner">
        <img src="/assets/workshops/workshop-1.png" alt="Workshop banner" />

        <div className="banner_overlay">
          <h1>AI & Data Engineering Workshop</h1>
          <p>Build production-ready data systems with industry experts.</p>

          <Link to="/workshop-form/#workshopForm" className="hero_cta">
            Register Now →
          </Link>
        </div>
      </div>

      {/* LEARNING SECTION */}
      <div className="learn">
        <h2>What You'll Learn</h2>

        <div className="cards">
          {[1, 2, 3].map((num) => (
            <div className="learn_card" key={num}>
              <div className="number">0{num}</div>
              <p>
                Learn how to design and seamlessly integrate efficient data
                workflows for real-world systems.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* INSTRUCTOR */}
      <div className="instructor">
        <div className="left">
          <h2>Meet Your Instructor</h2>

          <p>
            Manan Narula is a Data and AI Engineer at Microsoft with extensive
            experience building production-grade data platforms across global
            enterprises.
          </p>

          <p>
            From leading European data initiatives to designing real-time retail
            pricing engines, he brings deep expertise in Python, PySpark, SQL,
            AWS, Azure, and Airflow.
          </p>

          <div className="instr_personal">
            <strong>Faizan Ansari</strong>
            <span> AI Instructor</span>

            <Link to="/workshop-form/#workshopForm" className="cta_big">
              Secure Your Seat →
            </Link>
          </div>
        </div>

        <div className="right">
          <img src="/assets/instructor/instructor.jpg" alt="Instructor" />

          <div className="stat years">10+ Years Experience</div>
          <div className="stat students">50+ Students Trained</div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
