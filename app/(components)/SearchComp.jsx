"use client";
import { useState } from "react";
import Search from "./Search";

const people = [
  { id: 1, name: "Abcd" },
  { id: 2, name: "XYZ" },
  { id: 3, name: "Webb" },
];

const SearchCom = () => {
  const [selected, setSelected] = useState(people);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <>
      <Search
        selected={selected}
        setSelected={setSelected}
        filteredPeople={filteredPeople}
        setQuery={setQuery}
      />
    </>
  );
};

export default SearchCom;
