import "./courses.css";

const Courses = () => {
  return (
    <div className="courses_container">
      <div className="courses_card">
        <div className="courses_icon">🎓</div>

        <h1>Courses Coming Soon</h1>
        <p className="courses_subtitle">
          We’re building curated, hands-on courses designed to help you learn,
          apply, and grow with confidence.
        </p>

        <ul className="courses_features">
          <li>✔ Live & recorded workshops</li>
          <li>✔ Practical projects & real-world examples</li>
          <li>✔ Beginner to advanced learning paths</li>
          <li>✔ Community support & guidance</li>
        </ul>

        <p className="courses_footer">
          Stay tuned — exciting learning experiences are on the way.
        </p>
      </div>
    </div>
  );
};

export default Courses;
