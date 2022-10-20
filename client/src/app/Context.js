import React, { useState, useEffect, createContext } from "react";
import data from "../db/content.json";
import Axios from "../utils/Axios";
import { v4 as uuidv4 } from "uuid";
import { detect } from "detect-browser";

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
    finalMath: null,
  });
  const [answare, setAnswer] = useState([]);
  const [examID, setExamID] = useState("");
  const sessionLocal = localStorage.getItem("session");
  const [overallScore, setOverallScore] = useState({
    exactScore: 0,
    percentScore: 0,
    timeSpent: 0,
    currectAnswer: 0,
    wrongAnswer: 0,
  });

  const totalQuestions = process.env.REACT_APP_TOTAL_QUESTION;

  useEffect(() => {
    if (answare.length === mathCount.serialIndex + 1) {
      let score = 0;
      answare.forEach((el) => {
        if (el.isCurrect) {
          score++;
        }
      });
      let miliSecond = 0;
      answare.forEach((el) => {
        miliSecond = miliSecond + el.miliSecond;
      });
      setOverallScore({
        exactScore: score,
        percentScore: (100 / answare.length) * score,
        timeSpent: miliSecond / 1000,
        currectAnswer: score,
        wrongAnswer: answare.length - score,
      });
    }
  }, [answare, mathCount.serialIndex]);

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
    setAnswer([]);
  };

  const getStartedHandler = () => {
    setCount("start");
    questionGenerate();
    examIDgenetator();
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
    ansObj.sessionID = sessionLocal;
    temp.push(ansObj);
    setAnswer(temp);

    Axios.put(`/api/exams/${examID}/question`, ansObj)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch(() => {
        console.log("Something went wrong!");
      });
  };

  const doitagainHandler = () => {
    setCount("start");
    setAnswer([]);
    questionGenerate();
    examIDgenetator();
  };

  const examIDgenetator = () => {
    const eId = uuidv4();
    setExamID(eId);
    Axios.post("/api/exams", { examID: eId, sessionID: sessionLocal })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch(() => {
        console.log("Something went wrong!");
      });
  };

  const questionGenerate = () => {
    const mathTemp = {
      configuration: "horizontal",
      math: [],
    };
    for (let i = 1; i <= totalQuestions; i++) {
      const maxLimit = Math.round(Math.random() * 8 + 1);
      const minLimit = Math.round(Math.random() * 9);
      const addition = maxLimit + minLimit;
      const mathObj = {
        _id: i,
        firstNumber: maxLimit,
        secondNumber: minLimit,
        currectAnsware: String(addition),
        oparation: "+",
      };
      mathTemp.math.push(mathObj);
    }
    setMathCount({
      serialIndex: 0,
      finalMath: mathTemp,
    });
  };

  useEffect(() => {
    if (!sessionLocal) {
      const sessionId = uuidv4();
      localStorage.setItem("session", sessionId);
      const browser = detect();
      const sessionObj = {
        sessionID: sessionId,
        browserName: browser.name,
        browserType: browser.type,
        browserOS: browser.os,
        browserVersion: browser.version,
      };
      Axios.post("/api/session", sessionObj)
        .then((response) => {
          console.log(response.data.message);
        })
        .catch(() => {
          console.log("Something went wrong!");
        });
    }
  }, [sessionLocal]);

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
        overallScore: overallScore,
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