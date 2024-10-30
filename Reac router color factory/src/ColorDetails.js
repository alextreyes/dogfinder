import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();
  const foundColor = colors.find((c) => c.name === color);

  if (!foundColor) return <Navigate to="/colors" />;

  return (
    <div style={{ backgroundColor: foundColor.color, height: "100vh" }}>
      <h1>This is {foundColor.name}</h1>
      <Link to="/colors">Go back to all colors</Link>
    </div>
  );
}

export default ColorDetails;
