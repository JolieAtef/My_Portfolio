import React from "react";
import "./ProjectItem.module.css"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export function ProjectItem({project}) {
  return (
    <div>
      <div className="project_item">
      
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-(--secondary-color) group hover:scale-[1.02] transition-all duration-300">
      <div className="project_img relative">
      <img
        src={`${project.projectImage}`}
        alt="Event cover"
        className="relative  aspect-video w-full object-fit rounded-t-2xl"
      />
      <div className="project_links z-15 absolute top-0 end-0 size-full bg-(--light-color)/60  justify-center items-center gap-3 rounded-t-xl hidden group-hover:flex">
      <a className="text-[1.1rem]  bg-(--light-color) rounded-full size-[45px]  p-1 border-2 border-gray-500 text-(--font-color) flex justify-center items-center hover:border-(--first-color) hover:text-(--first-color) hover:shadow hover:shadow-fuchsia-400 hover:-translate-y-2 transition-all duration-300" href={project.gitLink} target="_blank" > <i class="fab fa-github"></i> </a>
      <a className="text-[1.1rem]  bg-(--light-color) rounded-full size-[45px]  p-1 border-2 border-gray-500 text-(--font-color) flex justify-center items-center hover:border-(--first-color) hover:text-(--first-color) hover:shadow hover:shadow-fuchsia-400 hover:-translate-y-2 transition-all duration-300" href={project.demoLink} target="_blank" ><i class="fas fa-eye"></i></a>
      </div>      
     </div>

      <CardHeader className="">
        <CardTitle>{project.projectName}</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        {
            project.technologies.map((tech)=>{ 
             return <Badge className="px-2 py-1.5 bg-(--light-color)" variant="secondary">{tech}</Badge>
            })
        }
      </CardFooter>
    </Card>          
    </div>
    </div>
  );
}