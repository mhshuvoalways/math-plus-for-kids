import React from "react";
import ContactImg from "../../assets/images/Contact.png";

const ContactUs = ({ submitHandler }) => {
  return (
    <div className="container">
      <div
        className="contact"
        style={{ backgroundImage: `url(${ContactImg})` }}
      >
        <p className="contact-overlay"></p>
        <div className="contact-container">
          <div>
            <p className="contact-title">We’d love to hear from you</p>
            <p className="contact-description">
              Any feedback, questions or suggestions? Please send me a message!
            </p>
            <form className="contact-form">
              <input
                type="email"
                placeholder="Email address"
                className="contact-email"
              />
              <textarea
                placeholder="Your message"
                className="contact-message"
              />
              <p className="contact-submit-btn" onClick={submitHandler}>
                Submit
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
