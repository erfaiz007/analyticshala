// imported CSS
import "./hero.css";

// imported Component
import Marq from "../Marq/Marq";
import { heroMarqData } from "../../../appData";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <main className="hero_main">
        <div className="hero_title">
          <div className="logo_name">
            <img src="/logoname.png" alt="logo name" />
          </div>
          {/* <div className="single_line">Analytics</div> */}
          <div className="single_line">that Helps You</div>
          <div className="shape single_line">Shape Your Future</div>
        </div>
        <div className="hero_buttons">
          <a href="#contact">Contact Us</a>
          <a href="https://topmate.io/faizan_ansari007" target="_blank">
            Request a Demo
          </a>
        </div>

        <div className="hero_info">
          <p>
            <i className="fas fa-check" /> 2-Free Trial Classes
          </p>
          <p>
            <i className="fas fa-check" /> Free Career Counselling
          </p>
        </div>
        <Marq data={heroMarqData} />
      </main>
    </section>
  );
};

export default Hero;
