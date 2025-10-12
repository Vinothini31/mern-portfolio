// src/App.js
import './App.css';
import 'devicon/devicon.min.css';

import Home from './components/Home';
import About from './components/About';
import Skills from "./components/Skills";

import Experience from "./components/Experience";

import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 2 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          
          <span>V</span> 
        </div>
      ) : (
        <>
          <Navbar />
          <main className="scroll-container">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            
            
            <section id="experience"><Experience /></section>
            
            <section id="education"><Education /></section>
            <section id="contact"><Contact /></section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
