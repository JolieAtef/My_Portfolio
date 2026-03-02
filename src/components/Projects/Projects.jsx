import React from "react";
import "./Projects.module.css"
import { data } from "@/data";
import { ProjectItem } from "../ProjectItem/ProjectItem";


export function Projects() {
  return (
    <div>
      <div className="projects_section container mx-auto py-8">
          <p className="uppercase text-center text-(--second-color)">My Recent Work</p>
          <h2 className="title">Projects</h2>
         
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
            {
               data["projects"].map((project) =>{ return (
                   <ProjectItem project={project}/>
               )})
            }
           </div>

        </div>
    </div>
  );
}