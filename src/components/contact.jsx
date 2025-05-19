import React from "react";
import "../styles/contact.css";
import AnimatedDock from "./dock";
import Whatsapp from "../components/img/whatsapp.png";
import Google from "../components/img/google.png";
import Waze from "../components/img/waze.png";
export default function Contact() {
  const Contact1 = "ANUAR BIN PANOT";
  const Contact2 = "MASNI BINTI MOHD NOR";
  const Contact3 = "SHAZIAN BINTI ANUAR";
  const Contact4 = "SHAZIEDA BINTI ANUAR";

  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <div className="title-contact">
            <label>HUBUNGI KAMI:</label>
          </div>
          <div className="whatsapp-icon">
            <img
              className="icon"
              src={Whatsapp}
              alt="Contact"
              style={{ transform: "scale(1.5)" }}
            />
            <img
              className="icon"
              src={Whatsapp}
              alt="Contact"
              style={{ transform: "scale(1.5)" }}
            />
            <img
              className="icon"
              src={Whatsapp}
              alt="Contact"
              style={{ transform: "scale(1.5)" }}
            />

            <img
              className="icon"
              src={Whatsapp}
              alt="Contact"
              style={{ transform: "scale(1.5)" }}
            />

            <div className="contact-name">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4em",
                }}
              >
                <li>
                  <span
                    id="contact1"
                    onClick={() => {
                      window.open("https://wa.link/9en8c6 ", "_blank");
                    }}
                  >
                    {Contact1}
                  </span>
                </li>
                <li>
                  <span
                    id="contact2"
                    onClick={() => {
                      window.open("https://wa.link/jgxxyf", "_blank");
                    }}
                  >
                    {Contact2}
                  </span>
                </li>
                <li>
                  <span
                    id="contact3"
                    onClick={() => {
                      window.open("https://wa.link/8q1hyf ", "_blank");
                    }}
                  >
                    {Contact3}
                  </span>
                </li>
                <li>
                  <span
                    id="contact4"
                    onClick={() => {
                      window.open("https://wa.link/tr4fcm ", "_blank");
                    }}
                  >
                    {Contact4}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="location-icon">
            <a
              href="https://maps.app.goo.gl/HRufKtt36vsD2rMp7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                window.open(
                  "https://maps.app.goo.gl/HRufKtt36vsD2rMp7?g_st=iw",
                  "_blank"
                );
              }}
            >
              <img
                className="icon"
                src={Google}
                alt="Google"
                style={{ transform: "scale(3)" }}
              />
            </a>
            <a
              href="https://waze.com/ul/hw280w2hpk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                window.open(
                  "https://waze.com/ul/hw280w2hpk",
                  "_blank"
                );
              }}
            >
              <img
                className="icon"
                src={Waze}
                alt="Waze"
                style={{ transform: "scale(3)" }}
              />
            </a>
          </div>
        </div>
        <div className="dock-contact-cont">
          <AnimatedDock />
        </div>
      </div>
    </>
  );
}
