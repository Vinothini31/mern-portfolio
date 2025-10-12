import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Heading with underline + dots */}
      <div className="education-heading">
        <h2 className="education-title">Education</h2>
        <p className="education-subtitle">
          A solid academic foundation fueling my passion for technology.
        </p>
        <div className="title-decor">
          <span className="line" />
          <span className="dots">
            <span className="dot" />
            <span className="dot center" />
            <span className="dot" />
          </span>
        </div>
        
      </div>

      {/* Timeline cards */}
      <div className="education-container">
        {/* MCA */}
        <div className="education-card">
          <div className="icon"><FaGraduationCap /></div>
          <div className="education-content">
            <h3>MCA – Master of Computer Applications</h3>
            <h4>M. Kumarasamy College of Engineering, Karur</h4>
            <p className="edu-details">
              <FaCalendarAlt /> 2024 – 2026 &nbsp; | &nbsp; <FaStar /> CGPA : 8.4
            </p>
          </div>
        </div>

        {/* B.Sc */}
        <div className="education-card">
          <div className="icon"><FaGraduationCap /></div>
          <div className="education-content">
            <h3>B.Sc - Computer Science</h3>
            <h4>M.V.Muthiah Government Arts College for Women</h4>
            <p className="edu-details">
              <FaCalendarAlt /> 2021 – 2024 &nbsp; | &nbsp; <FaStar /> CGPA: 8.12
            </p>
          </div>
        </div>

        {/* HSC */}
        <div className="education-card">
          <div className="icon"><FaGraduationCap /></div>
          <div className="education-content">
            <h3>Senior Secondary (XII)</h3>
            <h4>St. Joseph's Girls Higher Secondary School</h4>
            <p className="edu-details">
              <FaCalendarAlt /> 2019 – 2021 &nbsp; | &nbsp; <FaStar /> 88%
            </p>
          </div>
        </div>

        {/* SSLC */}
        <div className="education-card">
          <div className="icon"><FaGraduationCap /></div>
          <div className="education-content">
            <h3>Secondary (X)</h3>
            <h4>St. Joseph's Girls Higher Secondary School</h4>
            <p className="edu-details">
              <FaCalendarAlt /> 2018 – 2019 &nbsp; | &nbsp; <FaStar /> 83%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
