import { useState } from "react";
import { Link } from "react-router-dom";

// import Component
import MenuMobile from "../MenuMobile/MenuMobile";

// import CSS
import "./header.css";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <header className="header">
        <nav>
          <Link className="nav_logo" to="/">
            AnalyticShala
          </Link>

          <div className="nav_items">
            <Link to="/aboutUs">About Us</Link>
            <Link to="/courses">Courses</Link>
            <a href="#FAQ">FAQ</a>
            <a href="#contact">Contact</a>
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
