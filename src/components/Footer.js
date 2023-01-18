import React from "react";
import "../styles/banner.css";
export const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="footer-content ">
          <div className="footer-about">
            <p>About us</p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div className="footer-menu">
            <p>MENU</p>
            <ul>
              <li>Home</li>
              <li>Service</li>
              <li>Product</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="footer-menu">
            <p>Learn More</p>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-menu">
            <p>Address</p>
            <p>
              Novel Tech park, 1st floor housers road kudlu gate bangluru
              karnatak 560068
            </p>
            <p>Phone : 0804-717-898</p>
            <p>Email : hi@rubix.com</p>
          </div>
        </div>
      </div>
    </>
  );
};
