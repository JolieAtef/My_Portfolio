import React from "react";
import "./About.module.css"

export function About() {
  return (
    <div>
        <div className="about_section container mx-auto py-8">
          <div className="title_part" data-aos="fade-down"  data-aos-duration="800">
          <p className="uppercase text-center text-(--second-color)">Get To Know Me</p>
          <h2 className="title" >About Me</h2>
          </div>
          <div className="container mx-auto">
           {/* <div className="grid grid-cols-1 lg:grid-cols-2 py-8"> */}
            
            <div className="summary text-xl p-10 px-[15%] text-center " data-aos="fade-up" data-aos-duration="800">
              <p className="my-5">
              I’m Jolie Atef, a passionate React & Next.js Developer experienced in building modern, responsive, and high-performance web applications. I specialize in scalable front-end architectures with React, Next.js, and Redux Toolkit, turning complex designs into clean, maintainable, and user-friendly interfaces.</p>

              <p className="my-5">With experience from a successful 2-month internship, I delivered front-end features, integrated REST APIs, and worked in an agile team environment. Since then, I’ve honed my skills in JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Shadcn, and Bootstrap, building projects from dynamic landing pages to full-stack applications.</p>

              <p className="my-5">I’m comfortable with Git and modern development workflows and focus on today’s web development essentials — performance, SEO, cross-browser compatibility, and accessibility. Curious and growth-driven, I’m eager to contribute and build impactful digital products.</p>
              
            </div>

           {/* </div> */}
          </div>
        </div>
    </div>
  );
}