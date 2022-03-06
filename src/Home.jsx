import React from "react";
import Navbar from "./Pages/Navbar/Navbar";
import Intro from "./Pages/Home/Intro";
import FarmForm from "./Pages/Farmers/FarmForm";
function Home() {
  return (
    <>
      <div className="Header">
        <Navbar />
      </div>
      <div className="body">
        {/* <Intro /> */}
        <FarmForm />
      </div>
      <div className="Footer"></div>
    </>
  );
}

export default Home;
