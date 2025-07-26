// import CSS
import "./skills.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";
import { useEffect, useState } from "react";

const Skills = () => {
  const [epxYears, setExpYears]=useState(0);

useEffect(()=>{
  const startYear = 2015;
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear-startYear;

  setExpYears(totalYears);
},[])

  return (
    <>
      <section className="skills" id="skills">
        <div className="container">
          <SectionHeader
            number="03"
            title="Get the Required"
            subtitle="Skills"
          />

          <main className="skills_main">
            <div className="skills_top">
              <div className="skills__heading">
                Get the skills you need to get a Job that is
                <span className="demand_mob"> in Demand</span>
                <span className="demand_desk">
                  <br /> in Demand
                </span>
              </div>
              <div className="skills_details">
                <p>
                  The modern tech market dictates its own terms. Today, to be a
                  competitive specialist requires more than professional skills.
                </p>
                <div className="skills_data">
                  <div className="skills_data_item">
                    <div className="skills_number">
                      {epxYears}<span>+</span>
                    </div>
                    <div className="skills_info">Years Experience</div>
                  </div>
                  <span className="sperator">|</span>
                  <div className="skills_data_item">
                    <div className="skills_number">
                      10<span>+</span>
                    </div>
                    <div className="skills_info">Courses</div>
                  </div>
                  <span className="sperator">|</span>
                  <div className="skills_data_item">
                    <div className="skills_number">
                      500<span>+</span>
                    </div>
                    <div className="skills_info">Students Trained</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills_bottom">
              <div className="skills_types">
                <div className="skills_type_item">
                  <i className="fas fa-medal" />
                  <div className="skills_type_points">
                    <div className="skills_type_title">Critical Thinking</div>
                    <div className="skills_type_subtitle">
                      Empowering students to analyze situations logically and make independent decisions confidently.
                    </div>
                  </div>
                </div>
                <div className="skills_type_item">
                  <i className="fas fa-brain" />
                  <div className="skills_type_points">
                    <div className="skills_type_title">Collaboration</div>
                    <div className="skills_type_subtitle">
                      Encouraging teamwork, mutual respect to achieve success in academic and real-world challenges.
                    </div>
                  </div>
                </div>

                <div className="skills_type_item">
                  <i className="fas fa-bolt" />
                  <div className="skills_type_points">
                    <div className="skills_type_title">Adaptability</div>
                    <div className="skills_type_subtitle">
                     Preparing learners to embrace change, overcome obstacles in fast-paced environments.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Skills;
