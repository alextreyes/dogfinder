import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

function App() {
  // Initial color list
  const initialColors = [
    { name: "red", color: "#ff0000" },
    { name: "green", color: "#00ff00" },
  ];
  const [colors, setColors] = useState(initialColors);

  // Function to add a new color, placing it at the beginning of the array
  const addColor = (newColor) => {
    setColors([newColor, ...colors]); // New color at the top
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        <Route
          path="/colors/:color"
          element={<ColorDetails colors={colors} />}
        />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
