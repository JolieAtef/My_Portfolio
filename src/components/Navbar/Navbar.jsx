import "./Navbar.css"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "../Hooks/useTheme.jsx";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const {theme ,setTheme}= useTheme()
  const [menuOpen , setMenuOpen]= useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = ()=>{setMenuOpen(false)};


  return (


  <div className="py-4 sticky top-0 end-0 bg-(--light-color)">
   <div className="Navbar container mx-auto flex justify-between items-center">
    <div className="navbar_logo">
    <h1 className="font-bold text-4xl">J<span className="text-(--high-color) dark:text-(--medium-color)">.</span>A</h1>
    </div>

    <div className="dark:md:bg-(--second-color)/85 md:bg-(--medium-color)/90 px-4 py-2 z-20 order-last rounded-full shadow-2xl ">
    <nav className={`navbar_links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
    </nav>
      

    <div className={`navbar_toggle ${menuOpen ? "active" : ""} `} onClick={toggleMenu}>
        <span className="bar bg-(--high-color) z-30"></span>
        <span className="bar bg-(--high-color) z-30"></span>
        <span className="bar bg-(--high-color) z-30"></span>
    </div>
    </div>

    <div className="flex items-center justify-center gap-4 md:order-last">
    <Link to="/contact" className="btn btn-primary text-light nav_contact_btn"><Button className="bg-(--high-color) hover:bg-(--high-color)/80 ">Hire me</Button></Link>
      
     <Switch className="shadow" id="dark-mode" checked={theme === "dark"} onCheckedChange={(checked) =>
        setTheme(checked ? "dark" : "light")
      }/>
     </div>
  </div>
  </div>

  )
}