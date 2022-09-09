import React from "react";
import Grade1st from "../../assets/images/Grade1st.svg";
import Grade1st2 from "../../assets/images/Grade1st-2.svg";

const Filter = () => {
  return (
    <div className="container">
      <p className="filter-title">Course Category</p>
      <div className="filter-flex">
        <div className="filter-items filter-items__normal">
          <div className="filter-year-counter">
            <p className="filter-year-number">5-6</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            Kindergarden
          </p>
        </div>
        <div className="filter-items filter-items__1st-grade">
          <div className="filter-year-counter">
            <p className="filter-year-number">6-7</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__1st">1st grade</p>
          <img src={Grade1st} alt="" className="filter-year-grade-icon" />
          <img src={Grade1st2} alt="" className="filter-year-grade-icon-2" />
        </div>
        <div className="filter-items filter-items__normal">
          <div className="filter-year-counter">
            <p className="filter-year-number">7-8</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            2nd grade
          </p>
        </div>
        <div className="filter-items filter-items__normal">
          <div className="filter-year-counter">
            <p className="filter-year-number">8-9</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            3rd grade
          </p>
        </div>
        <div className="filter-items filter-items__disable">
          <div className="filter-year-counter filter-year-counter__disabled">
            <p className="filter-year-number">9-10</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            4th grade
          </p>
        </div>
        <div className="filter-items filter-items__disable">
          <div className="filter-year-counter filter-year-counter__disabled">
            <p className="filter-year-number">10-11</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            5th grade
          </p>
        </div>
        <div className="filter-items filter-items__disable">
          <div className="filter-year-counter filter-year-counter__disabled">
            <p className="filter-year-number">11-12</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            6th grade
          </p>
        </div>
        <div className="filter-items filter-items__disable">
          <div className="filter-year-counter filter-year-counter__disabled">
            <p className="filter-year-number">12-13</p>
            <p className="filter-year-text">years</p>
          </div>
          <p className="filter-year-grade filter-year-grade__kinder">
            7th Food
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
