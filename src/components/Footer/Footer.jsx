// import Data
import { Link } from "react-router-dom";
import { socialIconsData } from "../../../appData";

// import CSS
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
                 <Link className="footer_logo" to="/#hero">
                    <img src="/logoname.png" alt="logo name" />
                  </Link>


        <div className="footer_copyright">
          <span>&#169;</span> All rights reserved {currentYear}, Analyticshala
        </div>

        <div className="footer_social">
          {socialIconsData.map((item, i) => (
            <a key={i} href={item.href}>
              <i className={item.class} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
