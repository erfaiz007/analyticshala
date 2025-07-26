import { useState } from "react";

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

// import Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Works from "../../components/Works/Works";
import Projects from "../../components/Projects/Projects";
import Info from "../../components/Info/Info";
import RotateText from "../../components/RotateText/RotateText";
import Reveal from "../../components/Reveal/Reveal";
import Gallery from "../../components/Gallery/Gallery";
import ImageCards from "../../components/ImageCards/ImageCards";
import Why from "../../components/Why/Why";
import ScrollText from "../../components/ScrollText/ScrollText";
import Hero1 from "../../components/Hero1/Hero1";
import Courses from "../../components/Courses/Courses";

function Homepage() {
  const [showDownload, setShowDownload] = useState(false);
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
      {/* <Reveal /> */}
      {/* <ScrollText /> */}
      {/* <Hero1 /> */}
      {/* <RotateText /> */}
      {/* <Courses /> */}
      {/* <Works /> */}
      {/* <Why /> */}
      {/* <Info /> */}
      {/* <Projects /> */}
      {/* <Gallery /> */}
      {/* <ImageCards /> */}
    </>
  );
}

export default Homepage;
