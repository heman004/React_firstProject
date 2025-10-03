import { Link } from "react-router-dom";
import "../App.css"
import Banner from "./Banner";
import { useState } from "react";
import Login from "../Forms/Login";
const Navbar = () => {

  const [openn, setOpenn] = useState(false)
    return (
        <>
          <header className="p-5 bg-blue-700 font-bold text-white flex justify-between items-center ">
            <div>
               <h3 className="font-bold text-2xl">logo</h3>
            </div>
              <nav>
                <Link to="/" className="p-5">Home</Link>
                <Link to="/component" className="p-5">Component</Link>
                <Link to="/rendering" className="p-5">Rendering</Link>
                <Link to="/hooks" className="p-5">Hooks</Link>
                <Link to="/card" className="p-5">Card</Link>
                <Link to="/projects" className="p-5">Projects</Link>
                <button className="border-2 pr-2.5 pl-2.5 pt-0.5 pb-0.5 rounded-2xl bg-red-700" onClick={ () => {setOpenn(true)}}>Login</button>
                <Login openn={openn} isClose={ () => {setOpenn(false)} }/>
              </nav>
          </header>
        </>
    )
}
export default Navbar;