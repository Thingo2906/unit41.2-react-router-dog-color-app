import React from "react";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";
import { Route, Navigate, Routes} from "react-router-dom";

function AllRoutes({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
      <Route path="/" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default AllRoutes;
