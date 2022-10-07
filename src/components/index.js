import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./header/Header";
import Filter from "./filter/Filter";
import Math from "./math/Math";
import MathIntro from "./math/Intro";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";
import CountDown from "./countDown/CountDown";
import ActualMath from "./actualMath";
import Score from "./score/Score";

const Index = ({ data, math }) => {
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
  }, [data.filter.items, filterData]);

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
      setCount("mathdone");
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
    <div>
      <div className="wrapper">
        <Header header={data.header} />
        {modal.toggle ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Modal modalHandler={modalHandler} count={count} answare={answare}>
              {count === "init" && (
                <MathIntro
                  getStartedHandler={getStartedHandler}
                  modalObj={modal.modalObj}
                />
              )}
              {count === "start" && (
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <CountDown
                    countFinishHandler={countFinishHandler}
                    modalObj={modal.modalObj}
                  />
                </motion.div>
              )}
              {count === "finish" && (
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <ActualMath
                    modalObj={modal.modalObj}
                    mathCount={mathCount}
                    mathCountHandler={mathCountHandler}
                  />
                </motion.div>
              )}
              {count === "mathdone" && (
                <motion.div
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Score
                    doitagainHandler={doitagainHandler}
                    answare={answare}
                  />
                </motion.div>
              )}
            </Modal>
          </motion.div>
        ) : (
          <div>
            <Filter
              filter={data.filter}
              filterData={filterData}
              onChangeHanlder={onChangeHanlder}
            />
            <Math
              math={data.math}
              isActiveId={isActiveId}
              modalHandler={modalHandler}
            />
          </div>
        )}
      </div>
      <Footer footer={data.footer} />
    </div>
  );
};

export default Index;
