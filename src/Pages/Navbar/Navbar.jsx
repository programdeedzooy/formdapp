import React from "react";
import "./Navbar.css";
import imgg from "../../Assets/Sdd.gif";
function Navbar() {
  return (
    <>
      <span className="title">GSK</span>

      <img
        className="ava"
        src={imgg}
        alt="not avilable"
        style={{ width: "40px" }}
      />
      <span className="wel">Welcome back,name!!!</span>
      <span className="bal">Balance ------</span>
    </>
  );
}

export default Navbar;
