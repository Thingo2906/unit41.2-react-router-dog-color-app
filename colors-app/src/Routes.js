import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import ColorList from './ColorList';
import FilterColor from './FilterColor';
import FormColor from './FormColor';
 
function AllRoutes (){
  // get value of colors key from localStorage, if nothing get the default value
  //  const initialColors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF",};
 

  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColors] = useState(initialColors);
  // store the colors to the localStorage
  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );
  function handleAdd(newColorObj) {
    setColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }
 

//   function renderCurrentColor(props) {
//     const { color } = props.match.params;
//     const hex = colors[color];
//     return <Color {...props} hex={hex} color={color} />;
//   }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors}/>}></Route>
        <Route
          path="/colors/new"
          element={<FormColor addColor={handleAdd} />}
        ></Route>
        <Route
          path="/colors/:color"
          element={<FilterColor colors={colors} />}
        ></Route>

        <Route path="/" element={<Navigate to="/colors" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AllRoutes;