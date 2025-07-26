import { useState } from "react";

// import appData
import { coursesData } from "../../../appData";

// import CSS
import "./courses.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(coursesData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const courseCategory = [
    "All",
    "Data Analytics",
    "Visualization",
    "Web Development",
  ];

  const handleCategoryClick = (type) => {
    setSelectedCategory(type);

    const filteredCourses = coursesData.filter((course) => {
      return course.category === type;
    });

    if (type === "All") {
      setSelectedCourse(coursesData);
    } else {
      setSelectedCourse(filteredCourses);
    }
  };

  return (
    <section className="courses" id="courses">
      <div className="container">
        <SectionHeader number="02" title="Review the" subtitle="Courses" />

        <div className="course_nav">
          {courseCategory.map((course, index) => (
            <button
              key={index}
              className={`${selectedCategory === course ? "active" : ""}`}
              onClick={() => handleCategoryClick(course)}
            >
              {course}
            </button>
          ))}
        </div>
        <div className="course_cards">
          {selectedCourse.map((course, index) => (
            <div key={index} className="course_card">
              <div className="course_category_number">
                <span className="course_category">{course.category}</span>
                <span className="course_number">{course.number}</span>
              </div>
              <div className="course_info">
                <h2>{course.title}</h2>
                <p>{course.subtitle}</p>
              </div>
              <button className="course_btn">Know more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
