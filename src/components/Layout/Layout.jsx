import React from "react";
import "./Layout.module.css"
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export function Layout() {
  return (
    <div>
        <Navbar/>
        <div className="min-h-[85vh]">
        <Outlet/>
        </div>
        {/* <Footer/> */}
    </div>
  );
}