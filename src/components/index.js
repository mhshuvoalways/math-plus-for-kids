import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Filter from "./filter/Filter";
import Math from "./math/Math";
import Footer from "./footer/Footer";

const Index = ({ data }) => {
  const [filterData, setFilterData] = useState([]);
  const [isActiveId, setIsActiveId] = useState();

  const onChangeHanlder = (id) => {
    const temp = [...filterData];
    const findIndex = temp.findIndex((el) => el._id === id);
    const findTrue = temp.findIndex((el) => el.isActive === true);
    const findData = temp[findIndex];
    const findData2 = temp[findTrue];
    if (findData.isActive !== "disable") {
      temp[findData] = findData.isActive = true;
      if (findData2) {
        temp[findData2] = findData2.isActive = false;
      }
      setFilterData(temp);
      localStorage.setItem("filterId", id);
    }
  };

  useEffect(() => {
    const temp = data.filter.items;
    const findTrue = temp.find((el) => el.isActive === true);
    const localId = Number(localStorage.getItem("filterId"));
    if (localId) {
      const findTrue = temp.findIndex((el) => el.isActive === true);
      const findData2 = temp[findTrue];
      temp[findData2] = findData2.isActive = false;
      const findIndex = temp.findIndex((el) => el._id === localId);
      const findData = temp[findIndex];
      temp[findData] = findData.isActive = true;
      setIsActiveId(localId);
    } else {
      setIsActiveId(findTrue._id);
    }
    setFilterData(temp);
  }, [data.filter.items, filterData]);

  return (
    <div>
      <div className="wrapper">
        <Header header={data.header} />
        <Filter
          filter={data.filter}
          filterData={filterData}
          onChangeHanlder={onChangeHanlder}
        />
        <Math math={data.math} isActiveId={isActiveId} />
      </div>
      <Footer footer={data.footer} />
    </div>
  );
};

export default Index;
