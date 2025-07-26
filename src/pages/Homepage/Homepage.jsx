import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

// Imported CSS
import "./homepage.css";

// Imported components
import Hero from "../../components/Hero/Hero";
import Courses1 from "../../components/Courses1/Courses1";
import ScrollCards from "../../components/ScrollCards/ScrollCards";
import Skills from "../../components/Skills/Skills";
import Testimony from "../../components/Testimony/Testimony";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import Questions from "../../components/Questions/Questions";
import Contact from "../../components/Contact/Contact";
import Download from "../../components/Download/Download";

function Homepage() {
  const [showDownload, setShowDownload] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) {
      setTimeout(() => {
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100);
    }
  }
  }, [location]);

  return (
    <>
      <Download showDownload={showDownload} setShowDownload={setShowDownload} />
      <Hero />
      <Courses1 setShowDownload={setShowDownload} />
      <ScrollCards setShowDownload={setShowDownload} />
      <Skills />
      <Testimony />
      <HomeTeam />
      <Questions />
      <Contact />
    </>
  );
}

export default Homepage;
