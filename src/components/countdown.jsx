import React, { useState, useEffect, useCallback } from "react";
import "../styles/countdown.css";
import SideNavigation from "./sideNavigation";
import AnimatedDock from "./dock";

// Constants
const TIME_CONSTANTS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
};

const WEDDING_CONFIG = {
  WEDDING_DATE: "08/24/",
  HASHTAG: "#keShayanganFahmi ❤💍",
  INITIAL_HEADLINE: "Countdown Fahmi & Shafinaz",
  COMPLETION_HEADLINE: "It's Our Wedding Day!",
};

const Countdown = ({ targetDate, onComplete }) => {
  
  // Calculate the wedding date
  const calculateWeddingDate = useCallback(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextYear = currentYear + 1;
    
    const todayString = today.toLocaleDateString('en-US');
    let weddingDate = WEDDING_CONFIG.WEDDING_DATE + currentYear;
    
    if (todayString > new Date(weddingDate).toLocaleDateString('en-US')) {
      weddingDate = WEDDING_CONFIG.WEDDING_DATE + nextYear;
    }
    
    return new Date(weddingDate).getTime();
  }, []);

  // State
  const [countdownState, setCountdownState] = useState({
    timeLeft: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    isCompleted: false,
    headline: WEDDING_CONFIG.INITIAL_HEADLINE
  });

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [targetTimestamp] = useState(
    targetDate ? new Date(targetDate).getTime() : calculateWeddingDate()
  );

  // Calculate time remaining
  const calculateTimeLeft = useCallback((targetTime) => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / TIME_CONSTANTS.DAY),
      hours: Math.floor((distance % TIME_CONSTANTS.DAY) / TIME_CONSTANTS.HOUR),
      minutes: Math.floor((distance % TIME_CONSTANTS.HOUR) / TIME_CONSTANTS.MINUTE),
      seconds: Math.floor((distance % TIME_CONSTANTS.MINUTE) / TIME_CONSTANTS.SECOND),
    };
  }, []);

  // Toggle navigation handler
  const toggleNavigation = useCallback(() => {
    setIsNavigationOpen(prevState => !prevState);
  }, []);

  // Main countdown effect
  useEffect(() => {
    const updateCountdown = () => {
      const timeLeft = calculateTimeLeft(targetTimestamp);
      const now = new Date().getTime();
      const distance = targetTimestamp - now;

      if (distance < 0 && !countdownState.isCompleted) {
        setCountdownState({
          timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
          isCompleted: true,
          headline: WEDDING_CONFIG.COMPLETION_HEADLINE
        });
        onComplete?.();
      } else if (distance >= 0) {
        setCountdownState(prevState => ({
          ...prevState,
          timeLeft,
          isCompleted: false
        }));
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(intervalId);
  }, [targetTimestamp, calculateTimeLeft, countdownState.isCompleted, onComplete]);

  // Render countdown item
  const renderCountdownItem = (value, label) => (
    <li key={label}>
      <span>{value}</span>
      <div>{label}</div>
    </li>
  );

  return (
    <div className="countdown-container">
      <div className="wedding-frame">
        {/* Decorative corners */}
        <div className="decorative-corners corner-tl"></div>
        <div className="decorative-corners corner-tr"></div>
        <div className="decorative-corners corner-bl"></div>
        <div className="decorative-corners corner-br"></div>
        
        {/* Floral decorations */}
        <div className="floral-decoration floral-tl">🌸</div>
        <div className="floral-decoration floral-tr">🌺</div>
        <div className="floral-decoration floral-bl">🌹</div>
        <div className="floral-decoration floral-br">🌷</div>
        
        <div className="container">
          <div className="wedding-title">
            Countdown to Our Special Day
          </div>
          
          <div
            id="countdown"
            style={{ display: countdownState.isCompleted ? "none" : "block" }}
          >
            <ul className="countdown-list">
              {renderCountdownItem(countdownState.timeLeft.days, "Days")}
              {renderCountdownItem(countdownState.timeLeft.hours, "Hours")}
              {renderCountdownItem(countdownState.timeLeft.minutes, "Minutes")}
              {renderCountdownItem(countdownState.timeLeft.seconds, "Seconds")}
            </ul>
          </div>
          
          <div className="label-countdown">
            <h1 id="headline">{WEDDING_CONFIG.HASHTAG}</h1>
          </div>
          
          <div className="dock-cont-countdown">
            <AnimatedDock />
          </div>
          
          <div
            id="content"
            className="emoji"
            style={{ display: countdownState.isCompleted ? "block" : "none" }}
          >
            <span>🥳</span>
            <span>🎉</span>
            <span>🎂</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
