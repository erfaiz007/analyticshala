import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Workshops from "./pages/Workshops/Workshops";
import WorkshopDetails from "./pages/WorkshopDetails/WorkshopDetails";
import WorkshopForm from "./pages/WorkshopForm/WorkshopForm";
import Payment from "./pages/Payment/Payment";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
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
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshop-details" element={<WorkshopDetails />} />
          <Route path="/workshop-form" element={<WorkshopForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
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
