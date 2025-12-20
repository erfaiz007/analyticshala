import { useState } from "react";
import { Link } from "react-router-dom";

// import CSS
import "./header.css";

// import Component
import MenuMobile from "../MenuMobile/MenuMobile";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <header className="header">
        <nav>
          <Link className="nav_logo" to="/#hero">
            AnalyticShala
          </Link>

          <div className="nav_items">
            <Link to="/workshops" className="workshop_btn">Workshops</Link>
            <Link to="/aboutUs/#reveal">About Us</Link>
            <Link to="/#courses1">Courses</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/#contact">Contact</Link>
          </div>

          <div
            className={`ham_wrapper ${menuClick && "active"}`}
            onClick={() => setMenuClick(!menuClick)}
          >
            <div className="ham_icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <MenuMobile expand={menuClick} setExpand={setMenuClick} />
      </header>
    </>
  );
};

export default Header;
