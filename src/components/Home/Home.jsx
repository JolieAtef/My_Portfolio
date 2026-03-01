import React from "react";
import hs from "./Home.module.css"
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export function Home() {
  return (
    <div>
        <div className="hero grid grid-cols-1 lg:grid-cols-2 container mx-auto py-20">
         <div className="hero_left">
          <div className="hero_left_info">
          <p className="text-xl text-(--second-color)">HELLO, I'M</p>
          <h2 className="hero_name font-bold text-7xl my-8">Jolie Atef</h2>
          <div className={`${hs.hero_title}`}>
          <h3 className={`font-bold text-5xl my-8 text-(--first-color)`}>React FrontEnd Developer</h3>
          </div>
          <p className="hero_description text-gray-600 text-xl my-8">Full-Stack Developer specializing in React & Next.js and Node.js.</p>
          </div>
          <div className="hero_btns flex gap-3 ">
            <Button className="gradiant_bg  text-[1.1rem] px-5 py-6 rounded-full text-(--font-color)"><Link href="/about">View My Work</Link></Button>
            <Button className="text-[1.1rem] bg-inherit hover:bg-inherit rounded-full px-5 py-6 border-2 border-(--second-color) text-(--font-color)"> <a href="##" download >Download CV</a></Button>
          </div>
         </div>

         <div className="hero_right">

         </div>
        </div>
    </div>
  );
}