import React from "react";
import "../styles/banner.css";
import { Card } from "./Card";
import { data } from "./data";
export const Feature = () => {
  return (
    <>
      <div className="container features">
        <div className="content">
          <h1>TECH FOR TEENS - A RUBIX @ INITIATIVE</h1>
          <div className="show-card">
            {data.map((d, index) => {
              return (
                <>
                  <Card number={index} theme={d.theme} text={d.text} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
