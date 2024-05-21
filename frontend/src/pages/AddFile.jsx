import React, { useEffect, useState } from "react";
import {
  Container,
  InputField,
  TextArea,
  SelectComponent,
  Button,
} from "../Imports/ImportAll";
const AddFile = () => {
  const [data, setData] = useState({
    name: "",
    semester: "",
    message: "",
    subject: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const SemesterOptions = [
    { id: 1, name: "Semester 1" },
    { id: 2, name: "Semester 2" },
    { id: 3, name: "Semester 3" },
    { id: 4, name: "Semester 4" },
    { id: 5, name: "Semester 5" },
    { id: 6, name: "Semester 6" },
    { id: 7, name: "Semester 7" },
    { id: 8, name: "Semester 8" },
  ];

  const SubjectOptions = [
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

  const SemesterForSubjectList = (selected) => {
    console.log(selected);
    const filtered = SubjectOptions.find(
      (item) => item.id === parseInt(selected)
    );
    console.log(filtered);
    return filtered ? filtered.subjects : [];
  };

  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const subjects = SemesterForSubjectList(data.semester);
    setSubjects(subjects);
  }, [data.semester]);

  console.log(data);
  return (
    <Container className={"flex-col"}>
      <h1 className="text-2xl font-bold">File Upload</h1>
      <hr />
      <form>
        <div className="flex flex-col gap-4">
          <InputField label={"Name"} value={""} disabled="true" onChange={handleChange} name="name" />
          <SelectComponent
            label={"Semester"}
            name={"semester"}
            onChange={handleChange}
            options={SemesterOptions}
          />
          <label
            className="inline-block mb-2 text-lg font-semibold md:text-xl"
            htmlFor={"subject"}
          >
            Subject
          </label>
          <select
            onChange={handleChange}
            name="subject"
            className="px-2 py-2 font-semibold rounded-lg"
          >
            <option value="" selected disabled>
              Select Semester First
            </option>
            {subjects?.map((subject) => (
              <option value="">{subject}</option>
            ))}
          </select>
          <TextArea
            onChange={handleChange}
            name={"message"}
            label={"Message"}
            rows={1}
            cols={50}
          />
        </div>
        <br />
        <Button type="submit" text="Submit" />
      </form>
    </Container>
  );
};

export default AddFile;
