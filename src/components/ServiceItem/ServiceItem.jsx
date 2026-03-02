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
      <div className="service_item">
      <Card size="sm" className="mx-auto w-full max-w-sm bg-(--secondary-color)">
      <CardHeader>
        <i class={`fas fa-${service.icon}`}></i>
        <CardTitle>{service.title}</CardTitle>
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