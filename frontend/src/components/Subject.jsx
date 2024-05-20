import React, { useState } from "react";
import SubjectCard from "./SubjectCard";
// import BreadScrum from "./BreadScrum";
import { useParams } from "react-router-dom";
import Table from "./Table";

const Subject = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([
    { id: 1, name: "Chapter 1" },
    { id: 2, name: "Chapter 2" },
    { id: 3, name: "Chapter 3" },
    { id: 4, name: "Chapter 4" },
    { id: 5, name: "Chapter 5" },
  ]);

  return (
    <>

   <Table/>
    </>
  );
};

export default Subject;
