import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      <Link to="/dogs">Home</Link>
      {dogs.map((dogName) => (
        <Link key={dogName} to={`/dogs/${dogName.toLowerCase()}`}>
          {dogName}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
