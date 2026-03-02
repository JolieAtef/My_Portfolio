import React from "react";
import "./Services.module.css"
import { ServiceItem } from "../ServiceItem/ServiceItem.jsx";
import { data } from "@/data.js";

export function Services() {
  return (
    <div className=" ">
         <div className="services_section container mx-auto py-8">
          <p className="uppercase text-center text-(--second-color)">What I Offer</p>
          <h2 className="title">My Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
                       {
                          data["services"].map((service) =>{ return (
                              <ServiceItem service={service}/>
                          )})
                       }
                      </div>
           
        </div>
    </div>
  );
}