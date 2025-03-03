import React from "react";
import AnimatedDock from "./dock";

export default function Intinerary() {
  return (
    <>
      <div
       style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "129.4118%",
        paddingBottom: 0,
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "6em",
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
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGe3-pI4zk/HVPw8iErW0HFrmiyuRZsOw/view?embed"
        //   allowfullscreen="allowfullscreen"
        //   allow="fullscreen"
        ></iframe>
      </div>
      <div className="dock-cont-intinerary">
        <AnimatedDock />
      </div>
    </>
  );
}
