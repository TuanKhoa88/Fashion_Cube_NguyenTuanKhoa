import "./Fs06TimeDisplay.scss"
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown-container" style= {{backgroundColor: "#f3f3f3"}}>
        <h2>Deal Of The Week</h2>
        <p className="line"></p>
        <div className="time-container">
          <div className="time">
            {days}
            <p>Days</p>
          </div>
          <div>
            {hours}
            <p>Hours</p>
          </div>
          <div>
            {minutes}
            <p>Mins</p>
          </div>
          <div>
            {seconds}
            <p>Sec</p>
          </div>
        </div>
        <button>SHOP NOW</button>
      </div>
    );
  };

  return (
    <Countdown date={new Date("2023-06-25T00:00:00")} renderer={renderer} />
  );
};

export default CountDown;