import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.css';

import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaQuora } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({duration:2000,delay:100});
    AOS.refresh();
  }, []);

  return <>
    <div className="fmaindiv">

      <div className="fmaindiv1" data-aos="fade-up">


        <div className="row reviewdiv">
          <div className="col-4">

            <h3>Our Reviews</h3>
            <p>We love our students as much as they love us!</p>

          </div>

          {/* <div className="col-8">
            <div className="row rating">
              <ul>
                <li><FaFacebookF /> 4.8<FaStar/></li>
                <li><FcGoogle />4.7 <FaStar/></li>
                <li><FaQuora />100+</li>
              </ul>
              
            </div>
          </div> */}
        </div>
        <hr />


        <div className="blocks pt-4">
          <div >
            <h4>PROGRAMS</h4>
            <ul>
              <li><span>Classroom courses</span></li>
              <li><span>Live interactive courses</span></li>
              <li><span>Online self placed courses</span></li>
              <li><span>Career Bootcamp</span></li>
              <li><span>Success Stories</span></li>
              <li><span>Scholarship Test</span></li>
              <li><span>Get Career Advice</span></li>
            </ul>
          </div>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li><span>About us</span></li>
              <li><span> Hire Our Students</span></li>
              <li><span>Become a franchise</span></li>
              <li><span>Contact us</span></li>
            </ul>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li><span>Hacker Blocks</span></li>
              <li><span>Hiring Blocks</span></li>
              <li><span>IDE</span></li>
              <li><span>Blogs</span></li>
            </ul>
          </div>
          <div>
            <h4>COMMUNITY</h4>
            <ul>
              <li><span>Become a CB Superhero</span></li>
              <li><span>Request Workshop</span></li>
              <li><span>Request Chapter</span></li>
            </ul>
          </div>
          <div>
            <h4> Contact</h4>
            <ul>
              <li><span>info@codingblocks.com</span></li>
              <li><span>1800-274-4504</span></li>
              <h4>COUNSELLING TEAM</h4>
              <li><span>admissions@codingblocks.com</span></li>
              <li><span>9999-579-111/222/333</span></li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="logos">
          <div>
            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp" alt="" />
          </div>

          <div>
            <p>Privacy Policy | Terms of Service</p>
            <p>Copyright 2022- CODING BLOCKS PRIVATE LIMITED</p>
            <p>Made With Akash passion by Coding Blocks</p>
          </div>

          <div>

            <a href="http://localhost:3000/"><CiYoutube size={37}/></a>
            <a href="http://localhost:3000/"><FaInstagram size={30}/></a>
            <a href="http://localhost:3000/"><FaFacebookF size={27}/></a>
            <a href="http://localhost:3000/"><FaTwitter size={32}/></a>
            <a href="http://localhost:3000/"><FaGithub size={30}/></a>
            <a href="http://localhost:3000/"><FaLinkedinIn size={32}/></a>

          </div>
        </div>

      </div>
    </div>
  </>
}
export default Footer;