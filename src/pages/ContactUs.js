import React from "react";
import Header from "../components/header/Header";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer/Footer";

const ContactUsPage = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
