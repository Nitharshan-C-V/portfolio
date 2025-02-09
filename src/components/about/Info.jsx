import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";
import Tilt from "react-parallax-tilt";

const Info = () => {
  return (
    <div className="about__info grid">
      <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years</span>
        </div>
      </Tilt>
      <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">35+ Projects</span>
        </div>
      </Tilt>
      {/* <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
      </Tilt> */}
    </div>
  );
}

export default Info;