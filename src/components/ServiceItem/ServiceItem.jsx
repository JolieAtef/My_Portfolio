import React from "react";
import "./ServiceItem.module.css"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export function ServiceItem({service}) {
  return (
    <div>
      <div className="service_item" data-aos="zoom-in" data-aos-duration="800">
      <Card size="sm" className="mx-auto w-full max-w-sm bg-(--secondary-color) group hover:border-(--first-color) hover:rotate-x-[-2deg] hover:rotate-y-[-12deg] transition-all duration-500">
      <CardHeader className="flex flex-col gap-5">
        <div className="service_icon bg-(--medium-color)/30 dark:bg-(--secondary-color) text-(--first-color) p-5 rounded-md  group-hover:text-(--font-color) group-hover:bg-gradient-to-r group-hover:from-(--first-color)/80 group-hover:to-(--second-color)/80 transition-all duration-600">
        <i class={`${service.icon_start} fa-${service.icon} my-0 text-2xl`}></i>
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {service.description}
        </p>
      </CardContent>
    </Card>

      </div>
    </div>
  );
}