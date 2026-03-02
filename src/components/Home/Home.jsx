import React from "react";
import hs from "./Home.module.css"
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import heroImg from "../../assets/images/hero_6.png"

export function Home() {
  return (
    <div>
        <div className="hero grid grid-cols-1 lg:grid-cols-2 container mx-auto py-15 gap-10 items-center ">
         <div className="hero_left text-center lg:text-start">
          <div className="hero_left_info">
          <p className="text-xl text-(--second-color)">HELLO, I'M</p>
          <h2 className="hero_name font-bold text-7xl my-8">Jolie Atef</h2>
          <div className={`${hs.hero_title}`}>
          <h3 className={`font-bold text-5xl my-8 text-(--first-color)`}>React FrontEnd Developer</h3>
          </div>
          <p className="hero_description text-gray-600 text-xl my-8">Full-Stack Developer specializing in React & Next.js and Node.js.</p>
          </div>
          <div className="hero_btns flex gap-3 justify-center lg:justify-start">
            <Button className="gradiant_bg  text-[1.1rem] px-5 py-6 rounded-full text-(--font-color)"><Link to="/projects">View My Work</Link></Button>
            <Button className="text-[1.1rem] bg-inherit hover:bg-inherit rounded-full px-5 py-6 border-2 border-(--second-color) text-(--font-color)"> <i class="fas fa-download me-2"></i> <a href="/cv_jolie.pdf" download >Download CV</a></Button>
          </div>
          <div className="social_btns flex justify-center lg:justify-start gap-4 py-8">
          <a className="text-[1.1rem] bg-inherit hover:bg-inherit rounded-full size-[50px]  p-2 border-2 border-gray-500 text-(--font-color) flex justify-center items-center hover:border-(--first-color) hover:text-(--first-color) hover:shadow hover:shadow-fuchsia-400 hover:-translate-y-2 transition-all duration-300" href="https://github.com/JolieAtef" target="_blank" > <i class="fab fa-github"></i> </a>
          <a className="text-[1.1rem] bg-inherit hover:bg-inherit rounded-full size-[50px]  p-2 border-2 border-gray-500 text-(--font-color) flex justify-center items-center hover:border-(--first-color) hover:text-(--first-color) hover:shadow hover:shadow-fuchsia-400 hover:-translate-y-2 transition-all duration-300" href="https://www.linkedin.com/in/jolie-atef" target="_blank" > <i class="fab fa-linkedin-in"></i> </a>
          <a className="text-[1.1rem] bg-inherit hover:bg-inherit rounded-full size-[50px]  p-2 border-2 border-gray-500 text-(--font-color) flex justify-center items-center hover:border-(--first-color) hover:text-(--first-color) hover:shadow hover:shadow-fuchsia-400 hover:-translate-y-2 transition-all duration-300" href="mailto:Jolie.Atef.25@gmail.com" target="_blank" > <i class="fas fa-envelope"></i> </a>
          <a className="text-[1.1rem] bg-inherit hover:bg-inherit rounded-full size-[50px]  p-2 border-2 border-gray-500 text-(--font-color) flex justify-center items-center hover:border-(--first-color) hover:text-(--first-color) hover:shadow hover:shadow-fuchsia-400 hover:-translate-y-2 transition-all duration-300" href="tel:01286100866" target="_blank" > <i class="fas fa-phone"></i></a>
          </div>
         </div>

         <div className="hero_right flex justify-center">
              <div className="hero_img w-[65%] h-[100%] rounded-full bg-(--medium-color)/60 border-4 border-(--medium-color) relative ">
                <img src={heroImg} alt="Jolie`s image" className="w-full rounded-b-full"/>
                <div className="title_1 bg-(--light-color) absolute top-70 -end-25  font-semibold p-2 rounded-xl shadow sm:block hidden">React Developer</div>
                <div className="title_1 bg-(--light-color) absolute top-17 -start-5 font-semibold p-2 rounded-xl shadow sm:block hidden">Software Engineer</div>
              </div>
         </div>
        </div>
    </div>
  );
}