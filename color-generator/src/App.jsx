import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10);
    setList(colors);
    console.log(colors);
  };

  return (
    <>
      <div className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={handleChange}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
      <div className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} color={item} text={color} index={index} length={list.length}/>;
        })}
      </div>
    </>
  );
}

export default App;
