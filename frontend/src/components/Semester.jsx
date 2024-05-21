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
  const subjects = [
    {
      id: 1,
      subjects: [
        "Computer Fundamentals & Applications",
        "Society and Technology",
        "English I",
        "Mathematics I",
        "Digital Logic",
      ],
    },
    {
      id: 2,
      subjects: [
        "C Programming",
        "Financial Accounting",
        "English II",
        "Mathematics II",
        "Microprocessor and Computer Architecture",
      ],
    },
    {
      id: 3,
      subjects: [
        "Data Structures and Algorithms",
        "Probability and Statistics",
        "System Analysis and Design",
        "OOP in Java",
        "Web Technology",
      ],
    },
    {
      id: 4,
      subjects: [
        "Operating System",
        "Numerical Methods",
        "Software Engineering",
        "Scripting Language",
        "Database Management System",
        "Project I",
      ],
    },
    {
      id: 5,
      subjects: [
        "MIS and E-Business",
        "DotNet Technology",
        "Computer Networking",
        "Introduction to Management",
        "Computer Graphics and Animation",
      ],
    },
    {
      id: 6,
      subjects: [
        "Mobile Programming",
        "Distributed System",
        "Applied Economics",
        "Advanced Java Programming",
        "Network Programming",
      ],
    },
    {
      id: 7,
      subjects: [
        "Cyber Law and Professional Ethics",
        "Cloud Computing",
        "Image Processing",
        "Database Administration",
        "Network Administration",
        "Internship",
      ],
    },
    {
      id: 8,
      subjects: [
        "Database Programming",
        "Geographical Information System",
        "Data Analysis and Visualization",
        "Machine Learning",
      ],
    },
  ];
  const [data, setData] = useState([]);
  const showSubject = (id) => {
    const filtered = subjects.find((data) => data.id === parseInt(id));
    return filtered ?  filtered.subjects : [];
  };
  useEffect(() => {
    const sub = showSubject(id);
    setData(sub);
  }, [id]);
console.log(data)
  // Determine if the current route is a nested route
  const isSubjectRoute = location.pathname.includes("/subject/");

  return (
    <>
      <NavBar />
      <UserBodyContainer>
        {/* <BreadScrum /> */}
        {!isSubjectRoute && (
          <div className="w-ful mt-10 h-[auto] grid  md:grid-cols-4 gap-5  items-center">
            {data?.map((card, id) => (
              <Link to={`subject/${id}`} key={id}>
                <Card name={card} />
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
