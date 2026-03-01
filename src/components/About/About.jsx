import React from "react";
import "./About.module.css"

export function About() {
  return (
    <div>
        <div className="about_section container mx-auto py-8">
          <p className="uppercase text-center text-(--second-color)">Get To Know Me</p>
          <h2 className="title">About Me</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 py-8">
            <div></div>
            <div className="summary">
              <p>I'm a Full-Stack Developer & MERN Stack Enthusiast, passionate and dedicated to my work. I have acquired the skills and knowledge necessary to design and develop user-friendly, scalable web applications that make your project a success.</p>
            </div>

           </div>
        </div>
    </div>
  );
}