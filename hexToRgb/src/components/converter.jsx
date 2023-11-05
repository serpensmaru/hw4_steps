import React from "react";
import hexToRgb from "node-hex-to-rgb";

const Converter = ({ valid, error, form, handleChange }) => {
  let hexValid = hexToRgb(valid)[0]
  let strColorRgb = ""
  if (hexValid) {
    strColorRgb = `${hexValid["red"]}, ${hexValid["green"]}, ${hexValid["blue"]}`
  } else {
    strColorRgb = valid ? strColorRgb : error
  }
  return (
    <div className="container">
      <input
        className="input"
        name="backgroundColor"
        value={form}
        onChange={handleChange}
      />
      <div className="output">{`rgb (${strColorRgb})`}</div>
    </div>
  );
};

export default Converter;
