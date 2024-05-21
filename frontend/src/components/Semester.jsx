import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
// import BreadScrum from "./BreadScrum";
import SubjectCard from "./SubjectCard";
import NavBar from "./NavBar";
import { UserBodyContainer } from "../Imports/ImportAll";
const Semester = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState([
    { id: 1, name: "OS" },
    { id: 2, name: "DBMS" },
    { id: 3, name: "Numerical Method" },
    { id: 4, name: "Software Engineering" },
    { id: 5, name: "Scripting Language" },
  ]);

  // Determine if the current route is a nested route
  const isSubjectRoute = location.pathname.includes("/subject/");

  return (
    <>
      <NavBar />
      <UserBodyContainer>
        {/* <BreadScrum /> */}
        {!isSubjectRoute && (
          <div className="w-ful mt-10 h-[auto] grid  md:grid-cols-4 gap-5  items-center">
            {data.map((card, id) => (
              <Link to={`subject/${card.id}`} key={id}>
                <Card name={card.name} />
              </Link>
            ))}
          </div>
        )}
        <Outlet /> {/* Add Outlet here to render child routes */}
      </UserBodyContainer>
    </>
  );
};

export default Semester;
