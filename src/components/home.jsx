/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import AnimatedDock from "./dock";
import "../styles/home.css";
import AudioControls from "./audioControls";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    "https://www.canva.com/design/DAGn26jX0Kg/uxjX2MQMPf27xMEr1XCePw/view?embed",
    "https://www.canva.com/design/DAGpOXIPfY0/lM-8T0MjU7C7c3nFw8zwEw/view?embed" // Add your second page URL here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [pages.length]);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "140.0000%",
          paddingBottom: "0",
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "5em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "20px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0",
          }}
          src={pages[currentPage]} // Use the current page URL
        ></iframe>
        <AudioControls />
      </div>
      <div className="dock-cont-home">
        <AnimatedDock />
      </div>
    </>
  );
}
