import React from "react";
import "./About.css";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
       <div className="about-title">
          <h2>About Me</h2>
           <p className="about-subtitle">
          Passionate developer building innovative solutions and solving real-world problems.
        </p>
            <div className="underline">
            <div ClassName="dots">
               <span></span>
               <span></span>
               <span></span>

            </div>          
       </div>
        </div>

        
        <p className="about-description">
          Hey there! 👋 I'm <span className="highlight">Vinothini Murugan</span>, a Master of Computer Applications student, passionate about building modern and scalable digital solutions. With expertise in React, JavaScript, Node.js, and MongoDB, I enjoy exploring new technologies, solving DSA problems, and working on AI-powered solutions.
        </p>
        <button className="about-button">
          🚀 I like to build smart solutions for future
        </button>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3 className="card-title blue">
             <i className="fas fa-user icon-left"></i>  Who I Am</h3>
          <ul className="card-list">
            <li>A web developer having interest in software engineering.</li>
            <li>Enjoy solving problems and building scalable applications.</li>
            <li>Always learning new technologies to improve my skills.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3 className="card-title purple">
           <i className="fas fa-code icon-left"></i> What I Do</h3>
          <ul className="card-list">
            <li>Develop high-performance web apps using modern tech stacks.</li>
            <li>Solve algorithmic problems and optimize code efficiency.</li>
          </ul>
        </div>
        <div className="about-card">
  <h3 className="card-title green">
   <i className="fas fa-bullseye icon-left"></i> My Goals</h3>
  <ul className="card-list">
    <li>Become a full-stack developer with expertise in scalable systems.</li>
    <li>Contribute to impactful open-source projects.</li>
    <li>Work on AI/ML products that improve human life.</li>
  </ul>
</div>

<div className="about-card">
  <h3 className="card-title yellow">
   <i className="fas fa-lightbulb icon-left"></i>  My Philosophy</h3>
  <ul className="card-list">
    <li>Continuous learning is the key to innovation.</li>
    <li>Code should be clean, maintainable, and meaningful.</li>
    <li>Real impact comes from solving real problems.</li>
  </ul>
</div>

      </div>
    </section>
  );
};

export default About;
