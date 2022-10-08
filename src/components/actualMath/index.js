import React from "react";
import ProgressBar from "./ProgressBar";
import ActualMath from "./ActualMath";

const Index = ({ modalObj, mathCount, mathCountHandler, answare }) => {
  return (
    <div className="main-actual">
      <p className="math-intro-title math-intro-title__center">
        {modalObj.modal.title}
      </p>
      <ProgressBar mathCount={mathCount} answare={answare} />
      <ActualMath
        mathCount={mathCount}
        mathCountHandler={mathCountHandler}
        answare={answare}
      />
    </div>
  );
};

export default Index;
