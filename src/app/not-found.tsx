import React from "react";
import img from "../../public/img/404.jpg";
const NotFound = () => {
  return (
    <div className="container">
      <img src={img.src} alt="not found" />
    </div>
  );
};

export default NotFound;
