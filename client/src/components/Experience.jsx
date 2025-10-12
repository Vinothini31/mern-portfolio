import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "FullStack Developer Intern",
    company: "Tamil info Technologies",
    duration: "Jul 2025",
    description:
      "Built and optimized full-stack web applications using React, Node.js, Express, and MongoDB during my internship.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Zenith Technologies",
    duration: "Dec 2023 - Jan 2024",
    description:
      "Designed responsive web layouts and improved UI/UX for client projects using HTML, CSS, and JavaScript.",
  },
  {
    role: "Project Team Leader",
    company: "Kongu Engineering College - Hackathon",
    duration: "Mar 2025",
    description:
      "Hackathon project that assists students by answering queries, summarizing notes, and converting content into audio.",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      <p>From classrooms to codebases — applying knowledge where it matters most.</p>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="experience-duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
