import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Express.js", icon: "devicon-express-original colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },

    // ✅ Newly added
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "Vercel", icon: "devicon-vercel-original colored" },
  

    { name: "Netlify", icon: "devicon-netlify-plain colored" },
   
    { name: "Canva", icon: "devicon-canva-original colored" } // ⚠️ not in devicon
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Technologies and tools I work with</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={`${skill.icon} skill-icon`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Skills;
