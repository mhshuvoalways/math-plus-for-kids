import React from "react";
import TeachingStudests from "../../assets/images/TeachingStudests.svg";
import ReadingBook from "../../assets/images/ReadingBook.png";
import PenCalculate from "../../assets/images/PenCalculate.png";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="aboutus howitworks">
        <p className="howitworks-title">About</p>
        <div className="howitworks-about-img-container">
          <img
            src={TeachingStudests}
            alt="TeachingStudests"
            className="howitworks-about"
          />
        </div>
        <p className="aboutus-first-description">
          If you are here, chances are high you are concerned parent looking to
          help improve your child’s math skills. <br />
          <br /> Trust me I understand. As a father of two young kids going to
          public elementary school in the US. I understand the deep urge to help
          your kids do better particular in Math, a skill they will use for the
          entirety of their lives.
        </p>
        <div className="aboutus-readingbook">
          <p>
            Originally I tried to help my kids do better in Math by supporting
            them with their homework and finding complementary resources to help
            them grow Mathematically. However it is my frustration with these
            complementary resources that eventually led me to Math plus.
            <br />
            <br /> As a parent the tools you have at your disposal to help
            improve your child’s math skills are after school programs, websites
            or workbooks. When I went searching for these options to help
            compliment my children’s learning, I found they all had a lot of
            issues on common. These options were either too expensive, their
            content was boring and outdated or they were focused more on
            improving my child’s speed on Math drills rather than teaching Math
            strategies and providing relevant feedback.
          </p>
          <div className="aboutus-readingbook-img-container">
            <img
              src={ReadingBook}
              alt="TeachingStudests"
              className="aboutus-readingbook-img"
            />
          </div>
        </div>
        <div className="aboutus-readingbook aboutus-readingbook-calculate">
          <div className="aboutus-readingbook-img-container">
            <img
              src={PenCalculate}
              alt="TeachingStudests"
              className="aboutus-readingbook-img"
            />
          </div>
          <p>
            Originally I tried to help my kids do better in Math by supporting
            them with their homework and finding complementary resources to help
            them grow Mathematically. However it is my frustration with these
            complementary resources that eventually led me to Math plus.
            <br />
            <br /> As a parent the tools you have at your disposal to help
            improve your child’s math skills are after school programs, websites
            or workbooks. When I went searching for these options to help
            compliment my children’s learning, I found they all had a lot of
            issues on common. These options were either too expensive, their
            content was boring and outdated or they were focused more on
            improving my child’s speed on Math drills rather than teaching Math
            strategies and providing relevant feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
