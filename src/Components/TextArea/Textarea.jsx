import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "../TextField/dist/Form.css";
function Textarea(props) {
  const { name, placehold } = props.arr;
  const { cha } = props;
  var setvall = (va) => {
    console.log(`name`, name);
    console.log(va);
    cha(name, va);
  };
  return (
    <>
      <TextField
        multiline
        rows="3"
        inputProps={{
          style: {
            backgroundColor: "rgb(167, 99, 246,0.2)",
            color: "#FFFFFF",
            width: "320px",
          },
        }}
        InputLabelProps={{
          style: { color: "#A763F6" },
        }}
        placeholder={placehold}
        id="standard-basic"
        label={name}
        variant="standard"
        name={name}
        onChange={(e) => setvall(e.target.value)}
      />
    </>
  );
}

export default Textarea;
