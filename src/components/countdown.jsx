import React, { useState, useEffect } from "react";
import "../styles/countdown.css";
import SideNavigation from "./sideNavigation";
import AnimatedDock from "./dock";

export default function Countdown() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Calculate the birthday date
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "08/24/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const [countDown, setCountDown] = useState(new Date(birthday).getTime());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [headline, setHeadline] = useState("Countdown Fahmi & Shafinaz");
  const Desc = "#keShayanganFahmi ❤💍";
  const [contentVisible, setContentVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      setDays(Math.floor(distance / day));
      setHours(Math.floor((distance % day) / hour));
      setMinutes(Math.floor((distance % hour) / minute));
      setSeconds(Math.floor((distance % minute) / second));

      if (distance < 0) {
        setHeadline("It's Our Marry Day!");
        setContentVisible(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDown]);

  return (
    <div className="countdown-container">
      <div className="container">
        {/* <h1 id="headline">{headline}</h1> */}
        <div
          id="countdown"
          style={{ display: contentVisible ? "none" : "block" }}
        >
            <ul style={{
                display: "flex",
                position: "relative",
              }}>
              <li>
                <span id="days">{days}</span> days
              </li>
              <li>
                <span id="hours">{hours}</span> Hours
              </li>
              <li>
                <span id="minutes">{minutes}</span> Minutes
              </li>
              <li>
                <span id="seconds">{seconds}</span> Seconds
              </li>
            </ul>
          
        </div>
        <div className="label-countdown">
          <h1 id="headline">{Desc}</h1>
        </div>
        <div className="dock-cont-countdown">
          <AnimatedDock />
        </div>
        <div
          id="content"
          className="emoji"
          style={{ display: contentVisible ? "block" : "none" }}
        >
          <span>🥳</span>
          <span>🎉</span>
          <span>🎂</span>
        </div>
      </div>
    </div>
  );
}
