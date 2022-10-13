import React from "react";
import GuideHuman1 from "../../assets/images/GuideHuman1.svg";
import GuideHuman2 from "../../assets/images/GuideHuman2.svg";
import GuideHuman3 from "../../assets/images/GuideHuman3.svg";
import GuideHuman4 from "../../assets/images/GuideHuman4.svg";

const Howitworks = () => {
  return (
    <div className="container ">
      <div className="howitworks">
        <p className="howitworks-title">How it works</p>
        <div className="howitworks-description">
          <p>
            Math+ is a free tool designed to help K-5 children improve their
            math skills. This tool contains fun, interactive math drills that
            test your child’s basic algebra prowess, including addition,
            subtraction, division, and multiplication. It is meant to help your
            child not only get faster at solving basic algebra equations but
            also help you figure out your kid’s problem areas and the steps you
            can take to help them improve.
          </p>
          <p className="howitworks-guide-description">
            Here is how our tool works:
          </p>
        </div>
        <div className="howitworks-guide">
          <div className="howitworks-container">
            <img src={GuideHuman1} alt="" />
            <p className="howitworks-guide-number">1</p>
            <p className="howitworks-guide-title">Select a Category</p>
            <p className="howitworks-guide-long-description">
              We place all our math drills into different categories based on
              grade and age. Thus, if your child is in grade 1, select the grade
              1 category, and the relevant math drills will appear on the page.
              This will make it easier for us to benchmark your kid’s math
              fluency level against other kids of the same age.
            </p>
          </div>
          <div className="howitworks-container">
            <img src={GuideHuman2} alt="" />
            <p className="howitworks-guide-number">2</p>
            <p className="howitworks-guide-title">Pick a Math Drill</p>
            <p className="howitworks-guide-long-description">
              In each grade category, you will find separate math drills with
              equations on addition, subtraction, multiplication, and addition,
              allowing you to decide which math operation you wish your child to
              practice.
            </p>
          </div>
          <div className="howitworks-container">
            <img src={GuideHuman3} alt="" />
            <p className="howitworks-guide-number">3</p>
            <p className="howitworks-guide-title">Solve the Equations</p>
            <p className="howitworks-guide-long-description">
              Once you select which math operations you want to practice, your
              kid can start their math drill. While we do not time our math
              drills, ensure you and your child still stay conscious of the time
              spent on each math equation. We advise that you supervise your
              kids during their drills, not necessarily to help them find the
              answers (you should let your child make their own mistakes on
              equations) but to get a firsthand view of the questions your kids
              struggle with.
            </p>
          </div>
          <div className="howitworks-container">
            <img src={GuideHuman4} alt="" />
            <p className="howitworks-guide-number">4</p>
            <p className="howitworks-guide-title">Read your Summary</p>
            <p className="howitworks-guide-long-description">
              Once your kid has answered all the questions, our tool will
              automatically analyze your kid’s work and provide a detailed
              assessment of the questions they got wrong, the question they
              spent too much time on, (and later on our summaries will include
              relevant math strategies they can use to help them their equations
              faster and better).
            </p>
          </div>
        </div>
        <p className="howitworks-guide-last-description">
          Please understand that while our math drill tool will better your
          child’s math skills, it is only a complementary tool. Thus, it should
          not be a replacement for other approaches like regular classes,
          textbooks and school-assigned word problems and quizzes. <br /> We
          welcome any feedback you may have to help us improve our tool to
          ensure your child only gets the best of the best.
        </p>
      </div>
    </div>
  );
};

export default Howitworks;
