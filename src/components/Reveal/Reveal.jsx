// import React Hooks
import { useRef } from "react";

// import Libraries
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import CSS
import "./reveal.css";

// import Components
import SectionHeader from "../SectionHeader/SectionHeader";
import { aboutUsText } from "../../../appData";

const Reveal = () => {
  const triggerRef = useRef(null);
  const letterRef = useRef([]);

  useGSAP(() => {
    const reveal = gsap.to(letterRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 70%",
        end: "bottom 70%",
      },
      color: "#333",
      duration: 1,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const useLettersArray = () => {
    letterRef.current = [];
    return (ref) => ref && letterRef.current.push(ref);
  };
  const setLetters = useLettersArray();

  return (
    <section className="reveal" id="reveal">
      <div className="container">
        <SectionHeader number="01" title="Know" subtitle="About Us" />

        <div ref={triggerRef}>
          {aboutUsText.split("").map((letter, index) => (
            <span className="reveal_text" key={index} ref={setLetters}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Reveal;
