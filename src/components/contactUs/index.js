import React, { useState } from "react";
import ContactUs from "./ContactUs";
import SuccessMsg from "./SuccessMsg";

const Index = () => {
  const [contact, setContact] = useState("contact");

  const submitHandler = () => {
    setContact("success");
  };

  return (
    <div>
      {contact === "contact" ? (
        <ContactUs submitHandler={submitHandler} />
      ) : (
        <SuccessMsg />
      )}
    </div>
  );
};

export default Index;
