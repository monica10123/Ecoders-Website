import React from 'react';
import {ImLocation2} from "react-icons/im";
import {GrMail} from "react-icons/gr";
import {FaFacebookF} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

function Footer() {
  return (
    <div className='text-light  p-1' style = {{backgroundColor : " #000000"}}>
        
        <div className='d-flex  justify-content-evenly container  p-5 '>
            <div className='foraddress ' style = {{width : "30%"}}>
                <h3 style={{fontFamily:'Georgia', fontSize:'20px'}}>CONTACT US TODAY</h3>
                <h1 className='text-info' style={{fontFamily:'Calisto MT', fontSize:'35px'}}>ECODERS</h1><br/>
            <div className='d-flex justify-content-between' style = {{width : "90%"}}>
                  <ImLocation2 size='25px'/> <p style={{fontFamily:'	Segoe UI', fontSize:'16px'}}>#198, 1st main Road, Kirloskar Layout<br/>
                  Sidedahalli, Hesarghatta Main Rd,<br/> Nagasandra, Bengaluru, Karnataka 560073</p>
            </div>

            <div className='d-flex  justify-content-between ' style = {{width : "55%"}}>
                  <GrMail size='25px'/> <p style={{fontFamily:'	Segoe UI', fontSize:'16px'}}>ecoders.in@gmail.com</p>
            </div>
        </div>

            <div className='websitelinks ' style = {{width : "30%"}}>
              <h3 style={{fontFamily:'Georgia', fontSize:'25px'}}> Quick Links</h3><br/><br/>
                <ul>
                  <li className='list-group-item'><Link to="/"             className='text-light m-1 text-decoration-none'><IoIosArrowForward size='20px'/>HOME</Link></li>
                  <li className='list-group-item'> <Link to="/about"       className='text-light m-1 text-decoration-none'><IoIosArrowForward size='20px'/>ABOUT US</Link></li>
                  <li className='list-group-item'> <Link to="/service"     className='text-light m-1 text-decoration-none'><IoIosArrowForward size='20px'/>SERVICE</Link></li> 
                  <li className='list-group-item'><Link to="/portfolio"    className='text-light m-1 text-decoration-none'><IoIosArrowForward size='20px'/>PORTFOLIO</Link></li>
                  <li className='list-group-item'> <Link to="/contact"     className='text-light m-1 text-decoration-none'><IoIosArrowForward size='20px'/>CONTACT</Link></li> 
                  <li className='list-group-item'> <Link to="/Allstudent"  className='text-light m-1 text-decoration-none'><IoIosArrowForward size='20px'/>STUDENTS</Link></li> 
                </ul>
            </div>

            <div className='socialmedia ' style = {{width : "30%"}}>
              <h3 style={{fontFamily:'Georgia', fontSize:'25px'}}> Find us on Social Media </h3><br/>
                <div>
                <Link to="https://www.facebook.com" className='text-light m-2'><FaFacebookF size='25px'/></Link>
                <Link to="https://www.instagram.com" className='text-light m-2'><GrInstagram size='25px'/></Link>
                <Link to="https://www.twitter.com" className='text-light m-2'><BsTwitter size='25px'/></Link>
                <Link to="https://www.linkedin.com" className='text-light m-2'><FaLinkedin size='25px'/></Link>
                </div>
            </div>
        </div>
        <p className='text-center  text-light p-3 '> Copyright &copy; All rights reserved to The Thrice Trio.</p>
    </div>
  )
}
export default Footer;
