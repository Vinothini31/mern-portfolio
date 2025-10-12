import React from "react";
import "./Projects.css";

const projects = [

   {
    name: "Portfolio Website",
    description:"A responsive portfolio website showcasing my skills, projects, and achievements with a clean and interactive design.",

    tech: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" }

    ],
    image: "./images/portfolio.png",
    github: "https://github.com/Vinothini31/portfolio",
    live: "#home"
  },

  {
    name: "Hue Mania",
    description: "A full-stack color palette manager with user authentication, palette sharing, and live previews.",
    tech: [   
     { name: "HTML", icon: "devicon-html5-plain colored" },
     { name: "CSS", icon: "devicon-css3-plain colored" },
     { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
    ],
    image: "/images/huemania.png",
    github: "https://github.com/Vinothini31/HUE-MANIA",
    live: "https://huemania.netlify.app/"
  },
  {
    name: "AI Study Buddy",
    description: "Hackathon project that assists students by answering queries, summarizing notes, and converting content into audio.",
    tech: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" }
    ],
    image: "/images/aistudy.png",
    github: "https://github.com/Vinothini31/ai-study-buddy",
    live: "https://wonderful-begonia-8fc3c9.netlify.app/"
  },
  {
    name: "Pet Shop Website",
    description: "An e-commerce frontend site for pet products, designed with responsive layouts and attractive UI.",
    tech: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" }
    ],
    image: "/images/petshop.png",
    github: "https://github.com/Vinothini31/pet-website",
    live: "https://vinothinipetshop.netlify.app/"
  },
  {
    name: "To-Do List App",
    description: "A simple and elegant to-do list web app with add, delete, and mark-complete features.",
    tech: [
       { name: "HTML", icon: "devicon-html5-plain colored" },
     { name: "CSS", icon: "devicon-css3-plain colored" },
     { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      
    ],
    image: "/images/Todo.png",
    github: "https://github.com/Vinothini31/Todo-list",
    live: "https://to-do-list-prg.netlify.app/"
  },
  {
    name: "Rock Paper Scissors",
    description: "Interactive game built with JavaScript that tracks scores and displays round outcomes.",
    tech: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" }
    ],
    image: "/images/rps.png",
    github: "https://github.com/Vinothini31/js-rock-paper-scissor",
    live: "https://scissorpaperrockgame.netlify.app/"
  }
];

const Projects = () => {
  return (
    
      <section id="projects" className="projects-section">

      <h2 className="projects-title"> Projects</h2>
      <p className="projects-subtitle">Innovation is the art of turning problems into projects</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <div key={i} className="tech-icon">
                  <i className={tech.icon} title={tech.name}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="project-links" style={{ marginTop: "1rem" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow-outline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
