import React from "react";
import "../styles/banner.css";
export const Contactus = () => {
  return (
    <>
      <div className="container">
        <div className="contact-us">
          <div className="contact-us-text">
            <h1>GET IN TOUCH</h1>
            <p>Please Complete the form and we will get back you.</p>
          </div>
          <div className="contact-us-form">
            <div>
              <label>Name</label>
              <br />
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div>
              <label>Mobile Number</label>
              <br />
              <input type="text" placeholder="Enter Your Mobile Number" />
            </div>
            <div>
              <button>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
