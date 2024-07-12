// src/components/Preloader.js
import React from "react";
import "./preloader.css"; // You can use this for any additional styling

const Preloader = () => {
  return (
    <div className="preloader">
      <img
        src={"/coffeeloading.gif"}
        alt="Loading..."
        className="preloader-gif"
      />
    </div>
  );
};

export default Preloader;
