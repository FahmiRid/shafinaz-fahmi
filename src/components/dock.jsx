import React from "react";
// import { Github, Database, MessageCircle } from "lucide-react";
import Clock from "../components/img/clock.png";
import GalleryIcon from "../components/img/photos.png";
import LoveLetterIcon from "../components/img/loveletter.png";
import LocationIcon from "../components/img/location.png";
import Home from "../components/img/home.png";
import Itinerary from '../components/img/itinerary.png'
import Contact from '../components/img/contacts.png'
import { useNavigate } from "react-router-dom";
const styles = `
  .dock-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dock {
    display: flex;
    gap: 16px;
    padding: 16px;
    background-color: rgba(249, 250, 251, 0.9);
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(8px);
  }

  .dock-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .icon-wrapper:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .tooltip {
    position: absolute;
    top: -32px;
    padding: 4px 8px;
    background-color: #1f2937;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    transform: scale(0);
    transition: transform 0.2s ease;
  }

  .dock-icon:hover .tooltip {
    transform: scale(1);
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #374151;
  }
`;

// const DockIcon = ({ children, label }) => (
//   <div className="dock-icon">
//     <div className="icon-wrapper">{children}</div>
//     {/* <span className="tooltip">{label}</span> */}
//   </div>
// );

const DockIcon = ({ children, label, path }) => {
  const navigate = useNavigate();

  return (
    <div className="dock-icon" onClick={() => navigate(path)}>
      <div className="icon-wrapper">{children}</div>
      {/* <span className="tooltip">{label}</span> */}
    </div>
  );
};

const AnimatedDock = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="dock-container">
        <div className="dock">
          {/* <DockIcon label="GitHub">
            <Github className="icon" />
          </DockIcon> */}

          <DockIcon label="Home" path="/">
            <img className="icon" src={Home} alt="Home" />
          </DockIcon>

          <DockIcon label="Itinerary" path="/intinerary">
            <img className="icon" src={Itinerary} alt="Itinerary" />
          </DockIcon>

          <DockIcon label="Countdown" path="/countdown">
            <img className="icon" src={Clock} alt="Clock Icon" />
          </DockIcon>

          <DockIcon label="Contact" path="/contact">
            <img className="icon" src={Contact} alt="Contact" />
          </DockIcon>

          <DockIcon label="To-do-List" path="/rsvp">
            <img className="icon" src={LoveLetterIcon} alt="Love Letter Icon" />
          </DockIcon>
        </div>
      </div>
    </>
  );
};

export default AnimatedDock;
