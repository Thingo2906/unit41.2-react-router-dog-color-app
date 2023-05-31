import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './DogDetail.css'

function DogDetail({ dog }) {
  const navigate = useNavigate();

  if (!dog) {
    navigate("/dogs");
    return null;
  }

  return (
    <div className="row DogDetail">
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetail;
