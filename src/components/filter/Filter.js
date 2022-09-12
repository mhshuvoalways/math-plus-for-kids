import React from "react";
import Grade1st from "../../assets/images/Grade1st.svg";
import Grade1st2 from "../../assets/images/Grade1st-2.svg";

const Filter = ({ filter, onChangeHanlder, filterData }) => {
  return (
    <div className="container">
      <p className="filter-title">{filter.title}</p>
      <div className="filter-flex">
        {filterData.map((el) => (
          <div key={el._id}>
            {el.isActive === "disable" ? (
              <div
                className="filter-items filter-items__disable"
                onClick={() => onChangeHanlder(el._id)}
              >
                <div className="filter-year-counter filter-year-counter__disabled">
                  <p className="filter-year-number">{el.year}</p>
                  <p className="filter-year-text">years</p>
                </div>
                <p className="filter-year-grade filter-year-grade__kinder">
                  {el.grade}
                </p>
              </div>
            ) : el.isActive ? (
              <div
                className="filter-items filter-items__1st-grade"
                onClick={() => onChangeHanlder(el._id)}
              >
                <div className="filter-year-counter">
                  <p className="filter-year-number">{el.year}</p>
                  <p className="filter-year-text">years</p>
                </div>
                <p className="filter-year-grade filter-year-grade__1st">
                  {el.grade}
                </p>
                <img src={Grade1st} alt="" className="filter-year-grade-icon" />
                <img
                  src={Grade1st2}
                  alt=""
                  className="filter-year-grade-icon-2"
                />
              </div>
            ) : (
              <div
                className="filter-items filter-items__normal"
                onClick={() => onChangeHanlder(el._id)}
              >
                <div className="filter-year-counter">
                  <p className="filter-year-number">{el.year}</p>
                  <p className="filter-year-text">years</p>
                </div>
                <p className="filter-year-grade filter-year-grade__kinder">
                  {el.grade}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
