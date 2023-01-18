import React from "react";
import "../styles/banner.css";
export const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <div
            className="card-heading"
            style={{ backgroundColor: props.theme }}
          >
            <label style={{ color: props.theme }}>{props.number}</label>
          </div>
          <div className="card-icon">
            <i class="fa-brands fa-airbnb" style={{ color: props.theme }}></i>
          </div>
          <div className="card-details">
            <p>{props.text} </p>
          </div>
        </div>
      </div>
    </>
  );
};
