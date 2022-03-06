import React, { useState } from "react";
import Inputfield from "../../Components/TextField/Textfield";
import "./dist/FarmForm.css";
import Textarea from "../../Components/TextArea/Textarea";
import BButton from "../../Components/Button/Button";
function FarmForm() {
  const [farmdata, setfarmdata] = useState({
    name: "",
    acre: "",
    product: "",
    place: "",
    priceval: "",
    discription: "",
  });

  var chafarm = (names, val) => {
    setfarmdata({ ...farmdata, [names]: val });
  };

  var data = [
    {
      name: "name",
      placehold: "name",
    },
    {
      name: "acre",
      placehold: "acre",
    },
    {
      name: "product",
      placehold: "product you farm",
    },
    {
      name: "place",
      placehold: "your place ",
    },
    {
      name: "priceval",
      placehold: "price value",
    },
  ];
  var datadis = {
    name: "discription",
    placehold: "discription",
  };
  var datafield = data.map((va) => (
    <div className="spa">
      <Inputfield arr={va} />
    </div>
  ));

  let bbb = {
    name: "Submit",
  };

  return (
    <>
      <div className="formbox">
        <div className="formali">
          {datafield}
          <div className="spa">
            <Textarea arr={datadis} cha={chafarm} />
          </div>
        </div>
        <BButton but={bbb} />
      </div>
    </>
  );
}

export default FarmForm;
