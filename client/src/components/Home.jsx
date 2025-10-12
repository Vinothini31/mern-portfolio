import './Home.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    
      <section id="home" className="home-section">

      <div className="home-left">
        <p className="intro-tag">Hey! <span className="wave">👋</span> I'm</p>
        <h1 className="name">Vinothini Murugan</h1>
        
        <h2 className="typing-role">
  <TypeAnimation
    sequence={[
      'Software Developer', 2000,
      'Front-End Developer', 2000,
      'MERN Stack Developer', 2000,
      'Code enthusiast',2000
    ]}
    wrapper="span"
    speed={60}
    repeat={Infinity}
  />
</h2>
        <p className="contact-line">📞 +91 78250 77245</p>
        <p className="contact-line">📧 vinothinim012@gmail.com</p>

        <p className="location">📍India</p>

        <div className="home-buttons">
          <a
            href="https://drive.google.com/file/d/1ZQHSHxVbFucM79mrwH9ZR2hkE2EuGlTc/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="glow-btn">View Resume</button>
          </a>
          <a href="#contact">
            <button className="glow-btn-outline">Contact Me</button>
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/vinothinimurugan04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Vinothini31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://wa.me/917825077245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:vinothinim012@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
           <a href="https://www.hackerrank.com/profile/vinothinim012" target="_blank" rel="noopener noreferrer">
             <i className="fas fa-code"></i>
          </a>        

        </div>
      </div>

      <div className="home-right">
        <div className="blob-container">
          <img
            src="/images/homepg.jpg"
            alt="Vinothini"
            className="profile-pic"
          />
          <span className="blob blue"></span>
          <span className="blob green"></span>
          <span className="blob yellow"></span>
          <span className="blob purple"></span>
        </div>
      </div>
    </section>
  );
};

export default Home;
