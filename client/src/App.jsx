import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";


import Experience from "./components/Experience";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Hero />
      <About /> 
      <Skills />         
      <Projects />
      
      <Experience />
      
      <Education />
      <Contact />
    </div>
  );
}

export default App;
