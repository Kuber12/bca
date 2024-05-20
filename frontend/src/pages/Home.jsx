import Card from "../components/Card";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import BreadScrum from "../components/BreadScrum";
import Semester from "../components/Semester";
import NavBar from "../components/NavBar";

const Home = () => {
  const [data, setData] = useState([
    { id: 1, name: "Semester 1" },
    { id: 2, name: "Semester 2" },
    { id: 3, name: "Semester 3" },
    { id: 4, name: "Semester 4" },
    { id: 5, name: "Semester 5" },
    { id: 6, name: "Semester 6" },
    { id: 7, name: "Semester 7" },
    { id: 8, name: "Semester 8" },
  ]);
  return (
    <>
      <NavBar />
      <div class=" w-full  bg-gray-100 flex justify-center gap-10 py-5 items-center flex-wrap">
        {data.map((card, id) => (
          <Link key={id} to={`/semester/${card.id}`}>
            <Card name={card.name} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
