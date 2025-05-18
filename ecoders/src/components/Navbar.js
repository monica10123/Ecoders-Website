import React from 'react'
import ecoders_logo from "../img/ecoders_logo.webp";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='text-light d-flex justify-content-between p-1  ' style = {{backgroundColor : "#09072E "}}>
        <div className='d-flex align-items-center container' style = {{width : "50%"}}>
            <h1><img src = {ecoders_logo}  width="125px" height="90px"/></h1>
        </div>

        <div className='d-flex align-items-center container justify-content-evenly'style = {{width : "40%"}}>
           <Link to="/"                  className='text-light text-decoration-none m-1'>HOME</Link>
           <Link to="/about"             className='text-light text-decoration-none m-1'>ABOUT US</Link>
           <Link to="/service"           className='text-light text-decoration-none m-1'>SERVICE</Link>
           <Link to="/portfolio"         className='text-light text-decoration-none m-1'>PORTFOLIO</Link>
           <Link to="/contact"           className='text-light text-decoration-none m-1'>CONTACT</Link>
           <Link to="/Allstudent"        className='text-light text-decoration-none m-1'>STUDENTS</Link>
        </div>

    </div>
  )
}

export default Navbar;
