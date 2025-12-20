import { Link } from "react-router-dom";
import "./workshopDetails.css";

const WorkshopDetails = () => {
  return (
    <div className="WorkshopDetails_wrapper">
      <div className="banner">
        <img src="/assets/workshops/workshop-1.png" alt="" />
      </div>

      <div className="learn">
        <h3>What's there to learn?</h3>

        <div className="cards">
          <div className="learn_card">
            <div className="number">01</div>
            <p className="detail">
              Learn how to design and seamlessly integrate efficient data
              workflows.
            </p>
          </div>

          <div className="learn_card">
            <div className="number">02</div>
            <p className="detail">
              Learn how to design and seamlessly integrate efficient data
              workflows.
            </p>
          </div>
          <div className="learn_card">
            <div className="number">03</div>
            <p className="detail">
              Learn how to design and seamlessly integrate efficient data
              workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="instructor">
        <div className="left">
          <h3>Know your Instructor</h3>

          <div className="instr_details">
            <div className="instr_info">
              <p>
                Manan Narula is a Data and AI Engineer at Microsoft with a rich
                background in building large-scale, production-grade data
                systems. With over 6 years of experience across top-tier
                organizations like BC
              </p>
              <p>
                From leading global data initiatives at a European beverage
                giant to designing real-time retail pricing systems in Canada,
                Manan has hands-on experience in Python, PySpark, SQL, AWS,
                Azure, and Apache Airflow.
              </p>
            </div>
          </div>
          <div className="instr_personal">
            <strong className="instr_name">Faizan Ansari</strong>
            <div className="instr_title">AI Instructor</div>
            <Link to="/workshop-form">Register Now</Link>
          </div>
        </div>

        <div className="right">
          <div className="box years_box">10+ Years of Experience</div>
          <div className="box students_box">50+ Students Trained</div>
          <img src="/assets/instructor/instructor.jpg" alt="instructor" />
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
