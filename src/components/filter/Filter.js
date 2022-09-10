import React, { useState } from "react";
import Grade1st from "../../assets/images/Grade1st.svg";
import Grade1st2 from "../../assets/images/Grade1st-2.svg";

const Filter = () => {
  const [filterData, setFilterData] = useState([
    {
      id: "1",
      filterYearNumber: "5-6",
      grade: "Kindergarden",
      isActive: false,
    },
    {
      id: "2",
      filterYearNumber: "6-7",
      grade: "1st grade",
      isActive: false,
    },
    {
      id: "3",
      filterYearNumber: "7-8",
      grade: "2nd grade",
      isActive: false,
    },
    {
      id: "4",
      filterYearNumber: "8-9",
      grade: "3rd grade",
      isActive: false,
    },
    {
      id: "5",
      filterYearNumber: "9-10",
      grade: "4th grade",
      isActive: "disable",
    },
    {
      id: "6",
      filterYearNumber: "10-11",
      grade: "5th grade",
      isActive: "disable",
    },
    {
      id: "7",
      filterYearNumber: "11-12",
      grade: "6th grade",
      isActive: "disable",
    },
    {
      id: "8",
      filterYearNumber: "12-13",
      grade: "7th Food",
      isActive: "disable",
    },
  ]);

  const onChangeHanlder = (id) => {
    const temp = [...filterData];
    const findIndex = temp.findIndex((el) => el.id === id);
    const findTrue = temp.findIndex((el) => el.isActive === true);
    const findData = temp[findIndex];
    const findData2 = temp[findTrue];
    if (findData.isActive !== "disable") {
      temp[findData] = findData.isActive = true;
      if (findData2) {
        temp[findData2] = findData2.isActive = false;
      }
      setFilterData(temp);
    }
  };

  return (
    <div className="container">
      <p className="filter-title">Course Category</p>
      <div className="filter-flex">
        {filterData.map((el) => (
          <div key={el.id}>
            {el.isActive === "disable" ? (
              <div
                className="filter-items filter-items__disable"
                onClick={() => onChangeHanlder(el.id)}
              >
                <div className="filter-year-counter filter-year-counter__disabled">
                  <p className="filter-year-number">{el.filterYearNumber}</p>
                  <p className="filter-year-text">years</p>
                </div>
                <p className="filter-year-grade filter-year-grade__kinder">
                  {el.grade}
                </p>
              </div>
            ) : el.isActive ? (
              <div
                className="filter-items filter-items__1st-grade"
                onClick={() => onChangeHanlder(el.id)}
              >
                <div className="filter-year-counter">
                  <p className="filter-year-number">{el.filterYearNumber}</p>
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
                onClick={() => onChangeHanlder(el.id)}
              >
                <div className="filter-year-counter">
                  <p className="filter-year-number">{el.filterYearNumber}</p>
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
