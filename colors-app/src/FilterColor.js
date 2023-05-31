
import React from "react";
import { useParams } from "react-router-dom";
import Color from "./Color";

function RenderCurrentColor({ colors }) {
  const { color } = useParams();
  //colors is an object
  if (color) {
    const currentColor = colors[color];
    const hex = currentColor;

    if (hex) {
      return <Color color={color} hex={hex} />;
    }
  }

  return null;
}

export default RenderCurrentColor;