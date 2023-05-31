import React from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css'
function ColorList ({colors}){
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));
    return (
      <div>
        <div className="ColorList">
          <header className="ColorList-header">
            <h2>Wellcome to the color factory</h2>
            <Link to="/colors/new">Add a color</Link>
          </header>
        </div>
        <div className="select-color">
          <h6>Please select a color </h6>
          <ul>{colorLinks}</ul>
        </div>
      </div>
    );
}
export default ColorList;
