// import Data
import { socialIconsData } from "../../../appData";

// import CSS
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <a className="footer_logo" href="#">
          <h1>AnalyticShala</h1>
        </a>

        <div className="footer_copyright">
          <span>&#169;</span> All rights reserved 2024, Analyticshala
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
