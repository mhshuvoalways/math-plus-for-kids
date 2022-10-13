import React, { useState, useEffect, createContext } from "react";
import data from "../db/content.json";
import math from "../db/math.json";

export const Context = createContext();

const Index = ({ children }) => {
  const [filterData, setFilterData] = useState([]);
  const [isActiveId, setIsActiveId] = useState();
  const [modal, setModal] = useState({
    toggle: false,
    modalObj: null,
  });
  const [count, setCount] = useState("init");
  const [mathCount, setMathCount] = useState({
    serialIndex: 0,
    finalMath: math,
  });
  const [answare, setAnswer] = useState([]);

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
      if (findData2) {
        temp[findData2] = findData2.isActive = false;
      }
      const findIndex = temp.findIndex((el) => el._id === localId);
      const findData = temp[findIndex];
      temp[findData] = findData.isActive = true;
      setIsActiveId(localId);
    } else {
      setIsActiveId(findTrue._id);
    }
    setFilterData(temp);
  }, []);

  const modalHandler = (obj) => {
    setModal({
      toggle: !modal.toggle,
      modalObj: obj,
    });
    setCount("init");
    setMathCount({
      ...mathCount,
      serialIndex: 0,
    });
    setAnswer([]);
  };

  const getStartedHandler = () => {
    setCount("start");
  };

  const countFinishHandler = () => {
    setCount("finish");
  };

  const mathCountHandler = (ansObj) => {
    const temp = [...answare];
    if (mathCount.serialIndex + 1 < mathCount.finalMath.math.length) {
      setMathCount({
        ...mathCount,
        serialIndex: mathCount.serialIndex + 1,
      });
    } else {
      setTimeout(() => {
        setCount("mathdone");
      }, 2000);
    }
    temp.push(ansObj);
    setAnswer(temp);
  };

  const doitagainHandler = () => {
    setCount("start");
    setMathCount({
      ...mathCount,
      serialIndex: 0,
    });
    setAnswer([]);
  };

  return (
    <Context.Provider
      value={{
        data: data,
        math: data.math,
        filterData: filterData,
        isActiveId: isActiveId,
        modal: modal,
        count: count,
        mathCount: mathCount,
        answare: answare,
        onChangeHanlder: onChangeHanlder,
        modalHandler: modalHandler,
        getStartedHandler: getStartedHandler,
        countFinishHandler: countFinishHandler,
        mathCountHandler: mathCountHandler,
        doitagainHandler: doitagainHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Index;
