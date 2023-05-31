import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Color.css';
function Color ({color, hex}){
    const navigate = useNavigate();

    if (!color) {
      navigate("/colors");
      return null;
    }
    return (
      <div className="Color" style={{ backgroundColor: hex }}>
        <p>THIS IS {color}</p>
        <p>ISN'T IT BEAUTIFUL?</p>
        <p>
          <Link to="/colors">GO BACK</Link>
        </p>
      </div>
    );

}
export default Color;