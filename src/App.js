import React from "react";
import Header from "./components/Header/Header";
import TestCard from "./components/TestCard/TestCard";
import LabDetails from "./pages/LabDetails/LabDetails";
import UserProfile from "./pages/UserProfile/UserProfile";
import Checkout from "./pages/Checkout/Checkout";
import Lab from "./pages/Lab/Lab";
import Testdetails from "./pages/Testdetails/Testdetails";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Orderdetails from "./pages/Orderdetails/Orderdetails";
import Paymentfailure from "./pages/Paymentfailure/Paymentfailure";
import PaymentSuccess from "./pages/PaymentSucceess/PaymentSuccess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PromotionDis from "./pages/PromotionDis/PromotionDis";

import Bill from "./pages/Bill/Bill";

import Career from "./pages/Career/Career";
import Map from "./pages/Map/Map";
import Terms from "./pages/Terms/Terms";
import Faq from "./pages/Faq/Faq";

export default function App() {
  return (

    <>


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lab" element={<Lab />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="promotion" element={<PromotionDis />} />
          <Route path="news" element={<News />} />
          <Route path="career" element={<Career />} />
          <Route path="locate" element={<Map />} />
          <Route path="terms" element={<Terms />} />
          <Route path="faq" element={<Faq />} />
          <Route path="labdetails" element={<LabDetails />} />
          <Route path="cart" element={<Testdetails />} />
          <Route path="checkout" element={<Checkout/>} />
        </Routes>
        <Footer />
      </Router>


      {/* <TestCard /> */}
      {/* <LabDetails /> */}
      {/* <UserProfile /> */}
      {/* dinesh code */}

      {/* <Testdetails/> */}
      {/* <Checkout/> */}
      {/* dinesh code end */}
      {/* rudra code */}

          {/* <News/> */}
          {/* <PaymentSuccess/> */}
          {/* <Paymentfailure/> */}
          {/* <Orderdetails/> */}
          {/* <Bill/> */}
       
          {/* <PromotionDis/> */}



      {/* <UserProfile /> */}

      {/* <PaymentSuccess/> */}
      {/* <Paymentfailure/> */}

      {/* <Orderdetails/> */}
    </>

  );
}
