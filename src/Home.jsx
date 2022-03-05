import React from "react";
import Navbar from "./Pages/Navbar/Navbar";
import Intro from "./Pages/Home/Intro";
function Home() {
  return (
    <>
      <div className="Header">
        <Navbar />
      </div>
      <div className="body">
        <Intro />
      </div>
      <div className="Footer"></div>
    </>
  );
}

export default Home;
