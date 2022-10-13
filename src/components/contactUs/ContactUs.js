import React from "react";
import ContactImg from "../../assets/images/Contact.svg";

const ContactUs = ({ submitHandler }) => {
  return (
    <div className="container">
      <div
        className="contact"
        style={{ backgroundImage: `url(${ContactImg})` }}
      >
        <div className="contact-container">
          <div>
            <p className="contact-title">We’d love to hear from you</p>
            <p className="contact-description">
              Any feedback, questions or suggestions? Please send me a message!
            </p>
            <form className="contact-form">
              <div>
                <p className="contact-label">Email Address</p>
                <input
                  type="email"
                  placeholder="Email address"
                  className="contact-email"
                />
              </div>
              <input
                type="text"
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
