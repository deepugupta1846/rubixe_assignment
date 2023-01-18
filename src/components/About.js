import React from "react";
import image from "../images/background.jpg";
import "../styles/banner.css";
export const About = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="about-container">
            <div className="about-text">
              <h1>WHO WE ARE </h1>
              <div>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="about-text2">
            <h1>WHERE WE START </h1>
            <div>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
