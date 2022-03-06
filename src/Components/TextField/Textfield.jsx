import TextField from "@material-ui/core/TextField";

import "./dist/Form.css";

import farmerdata from "../../Helpers/formval.js";

export default function Inputfield(props) {
  const { name, placehold } = props.arr;

  return (
    <>
      <TextField
        inputProps={{
          style: {
            backgroundColor: "rgb(167, 99, 246,0.2)",
            color: "#FFFFFF",
            height: "40px",
            width: "320px",
          },
        }}
        InputLabelProps={{
          style: { color: "#A763F6", height: "130px" },
        }}
        placeholder={placehold}
        id="standard-basic"
        label={name}
        variant="standard"
      />
    </>
  );
}
