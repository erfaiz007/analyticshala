// import CSS
import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Courses from "./pages/Courses/Courses";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
