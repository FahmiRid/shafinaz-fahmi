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
        <div className="contact-wrapper">
          {/* Title */}
          <div className="contact-title">
            <h2>HUBUNGI KAMI</h2>
            <div className="title-underline"></div>
          </div>

          {/* Main Content Card */}
          <div className="contact-card">
            
            {/* WhatsApp Contacts Section */}
            <div className="whatsapp-section">
              <h3 className="section-title">Hubungi Melalui WhatsApp</h3>
              <div className="contacts-grid">
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/9en8c6", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact1}</span>
                </button>
                
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/jgxxyf ", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact2}</span>
                </button>
                
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/p1odar ", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact3}</span>
                </button>
                <button
                  className="contact-button"
                  onClick={() => {
                    window.open("https://wa.link/8q1hyf", "_blank");
                  }}
                >
                  <img
                    className="whatsapp-icon"
                    src={Whatsapp}
                    alt="WhatsApp"
                  />
                  <span className="contact-name">{Contact4}</span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider"></div>

            {/* Location Section */}
            <div className="location-section">
              <h3 className="section-title">Lokasi Kami</h3>
              <div className="location-buttons">
                <div className="location-item">
                  <a
                    href="https://maps.app.goo.gl/HRufKtt36vsD2rMp7?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-button google-maps"
                    onClick={e => {
                      e.preventDefault();
                      window.open(
                        "https://maps.app.goo.gl/HRufKtt36vsD2rMp7?g_st=iw",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      className="location-icon"
                      src={Google}
                      alt="Google Maps"
                    />
                  </a>
                  <p className="location-label">Google Maps</p>
                </div>
                
                <div className="location-item">
                  <a
                    href="https://waze.com/ul/hw280w2hpk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-button waze"
                    onClick={e => {
                      e.preventDefault();
                      window.open(
                        "https://waze.com/ul/hw280w2hpk",
                        "_blank"
                      );
                    }}
                  >
                    <img
                      className="location-icon"
                      src={Waze}
                      alt="Waze"
                    />
                  </a>
                  <p className="location-label">Waze</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dock Component */}
          <div className="dock-container">
            <AnimatedDock />
          </div>
        </div>
      </div>
    </>
  );
}