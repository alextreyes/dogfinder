import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <Link to="/colors/new">Add a new color</Link>
      <div>
        <h3>Available Colors:</h3>
        {colors.map((c) => (
          <Link key={c.name} to={`/colors/${c.name}`}>
            <p>{c.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ColorList;
