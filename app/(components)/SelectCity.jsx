"use client";
import React, { useState } from "react";
import Select from "./Select";

const people = [
  { id: 1, name: "Rajisthan" },
  { id: 2, name: "Maharashtra" },
  { id: 3, name: "Karnataka" },
];

const SelectCity = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <>
      <Select
        selected={selected}
        setSelected={setSelected}
        people={people}
      />
    </>
  );
};

export default SelectCity;
