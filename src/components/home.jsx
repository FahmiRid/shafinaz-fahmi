import React from "react";
import AnimatedDock from "./dock";
import "../styles/home.css";
import AudioControls from "./audioControls";

export default function Home() {
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
          src="https://www.canva.com/design/DAGe3KDl8Lo/NAnlpcbFvoZXD3lgEaP_EQ/view?embed"
        ></iframe>
        <AudioControls />
      </div>
      <div className="dock-cont-home">
        <AnimatedDock />
      </div>
    </>
  );
}
