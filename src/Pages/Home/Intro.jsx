import React from "react";
import "./intro.css";
import BButton from "../../Components/Button/Button";
import formm from "../../Assets/formm.png";
import donate from "../../Assets/donate.jpeg";
function Intro() {
  let bbb = {
    name: "🌾 form side",
    URl: "formside",
    img: formm,
  };
  let ddd = {
    name: "💸 doate side",
    URl: "doside",
    img: donate,
  };

  var arr = [bbb, ddd];

  var va = arr.map((vall) => (
    <div className="forbox">
      <div className="centerr">
        <img className="imgg" src={vall.img} alt="" />
      </div>
      <BButton but={vall} />
    </div>
  ));

  return (
    <>
      <div className="ff">{va}</div>
    </>
  );
}

export default Intro;
