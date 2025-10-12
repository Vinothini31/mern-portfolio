import { useState } from "react";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check the server.");
    } finally {
      setLoading(false);
    }
  };


  return (
    
      <section id="contact" className="contact-section">

      <h2 className="contact-heading">Let’s Build Something Amazing</h2>
      <p className="contact-subheading">
        Got an idea or project in mind? Let’s turn it into reality together!
      </p>

      {loading ? (
        <div className="ping-pong-loader">
          <span className="ball"></span>
          <span className="shadow"></span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}

      <footer className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Vinothini's Portfolio. Made with <span className="heart">❤️</span> 
    {" "}  and {" "}
      <span className="react-logo">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 841.9 595.3"
      className="react-icon"
    >
      <g fill="#61DAFB">
        <circle cx="420.9" cy="296.5" r="45.7" />
        <g stroke="#61DAFB" strokeWidth="30" fill="none">
          <ellipse rx="165" ry="380" cx="420.9" cy="296.5" transform="rotate(60 420.9 296.5)" />
          <ellipse rx="165" ry="380" cx="420.9" cy="296.5" transform="rotate(-60 420.9 296.5)" />
          <ellipse rx="165" ry="380" cx="420.9" cy="296.5" />
        </g>
      </g>
    </svg>
  </span>
 </p>
          Let's connect:{" "}
          <a href="mailto:vinothinim012@gmail.com">vinothinim012@gmail.com</a>


        <div className="social-icons">
          <a href="https://github.com/Vinothini31" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vinothinimurugan04" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
        </div>

        
      </footer>
    </section>
  );
};

export default Contact;
