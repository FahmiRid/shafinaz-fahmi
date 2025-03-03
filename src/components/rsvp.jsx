import React, { useState, useEffect } from "react";
import "../styles/rsvp.css";
import AnimatedDock from "./dock";
import Swal from "sweetalert2";
import supabase from "./supabase";
const RSVPForm = () => {
  const [names, setNames] = useState("");
  const [wishNames, setWishNames] = useState("");
  const [description, setDescription] = useState("");
  const [attendance, setAttendance] = useState(0);
  const [wish, setWish] = useState("");
  const [showWishForm, setShowWishForm] = useState(false);
  const [wishes, setWishes] = useState([]); // New state to store wishes

  const handleSubmit = async e => {
    e.preventDefault();
    const { data, error } = await supabase.from("attendance").insert([
      {
        name: names,
        attend: attendance,
        description: description
      },
    ]);
    if (error) {
      console.error(error);
    } else {
      Swal.fire({
        title: "Kehadiran di terima ",
        text: "",
        icon: "success",
      });
      fetchAttendanceData();
    }
  };

  const fetchAttendanceData = async () => {
    const { data, error } = await supabase.from("attendance").select("*");
    if (error) {
      console.error(error);
    } else {
      setWishes(data);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  return (
    <>
      <div className="container-rsvp">
        <div className="rsvp-card">
          <form className="rsvp-form">
            <h1 className="rsvp-title">RSVP</h1>

            <div className="input-group">
              <label className="input-label">NAMES:</label>
              <input
                type="text"
                value={names}
                onChange={e => setNames(e.target.value)}
                className="text-input"
              />
            </div>

            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="attend"
                  name="attendance"
                  value={1} // Use 1 for attend
                  onChange={e => setAttendance(parseInt(e.target.value))}
                  className="radio-input"
                />
                <label htmlFor="attend" className="radio-label">
                  WOULD LOVE TO ATTEND
                </label>
              </div>

              <div className="radio-option">
                <input
                  type="radio"
                  id="cannot"
                  name="attendance"
                  value={0} // Use 0 for cannot attend
                  onChange={e => setAttendance(parseInt(e.target.value))}
                  className="radio-input"
                />
                <label htmlFor="cannot" className="radio-label">
                  SADLY CANNOT ATTEND
                </label>
              </div>
            </div>

            <div>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="text-input"
                placeholder="Wish"
              />
            </div>

            <button onClick={handleSubmit}>
              <p>Submit</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>

            {/* Comment Section */}
            <div className="comment-section">
              <h2>Wishes</h2>
              <div className="comment-container">
                {wishes.map((wish, index) => (
                  <div key={index} className="comment-card">
                    <p>
                      <strong>{wish.name}</strong>: {wish.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="dock-cont-rsvp">
          <AnimatedDock />
        </div>
      </div>
    </>
  );
};

export default RSVPForm;
