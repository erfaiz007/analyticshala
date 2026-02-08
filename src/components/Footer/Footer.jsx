import { Link } from "react-router-dom";
import { socialIconsData } from "../../../appData";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
        {/* BRAND */}
        <div className="footer_col brand">
          <img src="/logoname.png" alt="Analyticshala logo" />

          <p>
            Empowering the next generation of data professionals with
            industry-ready skills in AI, Analytics, and Engineering.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer_col">
          <h4>Explore</h4>

          <Link to="/#hero">Home</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/aboutUs/#reveal">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        {/* WORKSHOPS */}
        <div className="footer_col">
          <h4>Programs</h4>

          <Link to="/workshops">Upcoming Workshops</Link>
          <Link to="/workshops">Corporate Training</Link>
          <Link to="/workshops">1:1 Mentorship</Link>
        </div>

        {/* CONTACT */}
        <div className="footer_col">
          <h4>Contact</h4>

          <p>Email: team@analyticshala.in</p>
          <p>India • Global Online</p>

          <div className="footer_social">
            {socialIconsData.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={item.class} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}

      <div className="footer_bottom">
        © {currentYear} Analyticshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
