import React from "react";
import ProgressBar from "./ProgressBar";
import ActualMath from "./ActualMath";

const Index = ({ modalObj, mathCount, mathCountHandler }) => {
  return (
    <div className="main-actual">
      <p className="math-intro-title math-intro-title__center">
        {modalObj.modal.title}
      </p>
      <ProgressBar mathCount={mathCount} />
      <ActualMath mathCount={mathCount} mathCountHandler={mathCountHandler} />
    </div>
  );
};

export default Index;
