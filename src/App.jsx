import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import {Layout} from "./components/Layout/Layout.jsx"
import {Home} from "./components/Home/Home.jsx"
import {About} from "./components/About/About.jsx"
import {Contact}  from "./components/Contact/Contact.jsx"
import {Notfound} from "./components/Notfound/Notfound.jsx"
import {Projects} from "./components/Projects/Projects.jsx"
import {Skills} from "./components/Skills/Skills.jsx"


const routes= createBrowserRouter([
  {path:"/",element: <Layout/>, children:[
   {path:"/",element: <Home/>},
   {path:"/about",element: <About/>},
   {path:"/skills",element: <Skills/>},
   {path:"/projects",element: <Projects/>},
   {path:"/contact",element: <Contact/>},
   {path:"*",element: <Notfound/>},
  ] 
  }
])

function App() {


  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
