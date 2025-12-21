import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./aboutUs.css";

import Reveal from "../../components/Reveal/Reveal";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition =
            el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="aboutUs_container">
      <Reveal />
    </div>
  );
};

export default AboutUs;
