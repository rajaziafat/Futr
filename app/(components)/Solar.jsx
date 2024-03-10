"use client";
import { useState } from "react";
import Table from "./Table";

const columns = [
  { title: "" },
  { title: "Plant name" },
  { title: "DC capacity" },
  { title: "Date" },
  { title: "Inverters" },
  { title: "SMBs" },
  { title: "Modules" },
  { title: "Inverter transformers" },
  {
    lastTitle: "Project",
    dropdown: true,
    options: [
      { value: "project1", label: "Solar Project" },
      { value: "project2", label: "Transmission line projects" },
    ],
  },
];

const tableData = [
  {
    number: "3",
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "On Project", class: "purple" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
  {
    number: "1",
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "On Project", class: "purple" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
  {
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "Available", class: "green" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
  {
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "No Project", class: "saffron" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
  {
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "Offline", class: "slateGray" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
  {
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "Offline", class: "slateGray" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
  {
    plantName: "Sulekal solar plant",
    location: "Rajasthan, India",
    value1: "14",
    date: "14-05-24",
    value2: "14",
    status: { statusValue: "Available", class: "green" },
    code: "ARB—2560",
    value3: "3",
    project: "Solar project",
  },
];

const Solar = () => {
  const [openProject, setOpenProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };
  return (
    <>
      <Table
        columns={columns}
        selectedProject={selectedProject}
        onProjectChange={handleProjectChange}
        openProject={openProject}
        setOpenProject={setOpenProject}
        tableData={tableData}
      />
    </>
  );
};

export default Solar;
