// src/App.js
import './App.css';
//import 'devicon/devicon.min.css';

import Home from './components/Home';
import About from './components/About';
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const [loading, setLoading] = useState(true);

  // Chat state
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Connect to Socket.io
  const socket = io(); // automatically connects to same origin in production

  useEffect(() => {
    // simulate loading for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);

    // Listen for incoming messages
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      clearTimeout(timer);
      socket.disconnect(); // cleanup
    };
  }, []);

  const sendMessage = () => {
    if(input.trim()) {
      socket.emit("sendMessage", input);
      setInput("");
    }
  };

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

            {/* Chat Section */}
            <section id="chat" style={{ padding: "2rem", borderTop: "1px solid #ccc" }}>
              <h2>Live Chat</h2>
              <div style={{ maxHeight: "200px", overflowY: "scroll", border: "1px solid #ddd", padding: "0.5rem", marginBottom: "0.5rem" }}>
                {messages.map((m, i) => <div key={i}>{m}</div>)}
              </div>
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type your message..." 
                style={{ padding: "0.5rem", width: "70%" }}
              />
              <button onClick={sendMessage} style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>Send</button>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
