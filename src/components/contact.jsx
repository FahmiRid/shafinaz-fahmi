import React from "react";
import "../styles/contact.css";
import AnimatedDock from "./dock";
import Whatsapp from "../components/img/whatsapp.png";
import Google from "../components/img/google.png";
import Waze from "../components/img/waze.png";
export default function Contact() {
  const Contact1 = "DAUD BIN MOHAMMAD";
  const Contact2 = "SITI AMINAH BINTI WAHAB";
  const Contact3 = "SYAZWANI SYAHIRAH";
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
            <div className="contact-name">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6em",
                }}
              >
                <li>
                  <span
                    id="contact1"
                    onClick={() => {
                      window.open("https://wa.link/5naetw ", "_blank");
                    }}
                  >
                    {Contact1}
                  </span>
                </li>
                <li>
                  <span
                    id="contact2"
                    onClick={() => {
                      window.open("https://wa.link/oj346k ", "_blank");
                    }}
                  >
                    {Contact2}
                  </span>
                </li>
                <li>
                  <span
                    id="contact3"
                    onClick={() => {
                      window.open("https://wa.link/lcc1f4 ", "_blank");
                    }}
                  >
                    {Contact3}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="location-icon">
            <a
              href="https://maps.app.goo.gl/QGer2XuTnA3d19Zy9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                window.open(
                  "https://maps.app.goo.gl/QGer2XuTnA3d19Zy9",
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
              href="https://ul.waze.com/ul?place=ChIJfeXof8e3zTERchewv2BrmA4&ll=2.91918070%2C101.65799890&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => {
                e.preventDefault();
                window.open(
                  "https://ul.waze.com/ul?place=ChIJfeXof8e3zTERchewv2BrmA4&ll=2.91918070%2C101.65799890&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
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
