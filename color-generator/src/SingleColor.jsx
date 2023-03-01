import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color, text, index, length }) => {
  const [copied, setCopied] = useState(false);

  const { rgb, weight } = color;
  let textColor = "black";
  console.log(index);
  console.log(length);
  if (index >= Math.floor(length / 2)) textColor = "white";

  const handleClick = () => {
    navigator.clipboard.writeText(rgbToHex(...rgb));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    },3000)
  };

  return (
    <div
      className="color"
      style={{ backgroundColor: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` }}
      onClick={handleClick}
    >
      <div
        className="percent-value"
        style={{ color: textColor, fontWeight: "bold" }}
      >{`${weight}%`}</div>
      <div
        className="color-value"
        style={{ color: textColor, fontWeight: "bold" }}
      >
        {rgbToHex(...rgb)}
      </div>
      {
        copied && "copied"
      }
    </div>
  );
};

export default SingleColor;
