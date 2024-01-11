import React from "react";
import "./Blog.css";
import { MdWifiCalling3 } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
    useEffect(() => {
        AOS.init({duration:3000,delay:100});
        AOS.refresh();
      }, []);

    return <>
        <div className="blog">
            <div className="mblogdiv" data-aos="fade-up">
                <div className="ublogdiv">
                    <h4>Latest from the Blog</h4>
                    <button type="button" class="btn btn-danger ">Read all Blogs</button>
                </div>
                <div className="row bimgdiv">
                    <div className="col-3 p-3">
                        <img src="https://codingblocks.com/assets/img/cpp-guide.jpeg" alt="" />
                        <h5>A thorough guide to C++ for beginners</h5>
                        <p>3 min read</p>
                        <a href="">Read more<FaAngleRight/></a>
                    </div>
                    <div className="col-3 p-3">
                        <img src="https://codingblocks.com/assets/img/skills-of-cp.jpeg" alt="" />
                        <h5>A beginner's guide to the skills you learn in CP</h5>
                        <p>3 min read</p>
                        <a href="http://localhost:3000/">Read more<FaAngleRight/></a>
                    </div>
                    <div className="col-3 p-3">
                        <img src="https://codingblocks.com/assets/img/data-science-in-india.jpeg" alt="" />
                        <h5>Rising Demand for Data science professionals in India</h5>
                        <p>4 min read</p>
                        <a href="http://localhost:3000/">Read more<FaAngleRight/></a>
                    </div>
                    <div className="col-3 p-3">
                        <img src="https://codingblocks.com/assets/img/android-developers.jpeg" alt="" />
                        <h5>Scope for Android developers now & in the upcoming years</h5>
                        <p>3 min read</p>
                        <a href="http://localhost:3000/">Read more<FaAngleRight/></a>
                    </div>
                </div>
            </div>
        </div>


        <div className="blogdiv">
            <div className="row learning">
                <div className="col-6" data-aos="fade-right">
                    <h3>Talk to our Learning Consultant! </h3>
                    <p>Get a free counselling session from our products</p>
                </div>
                <div className="col-6" data-aos="fade-left">
                    <h5>
                      <MdWifiCalling3/>  Contact Number
                    </h5>
                    <h3 style={{color:"#FF7A01"}}>1800-274-4504</h3>
                    <hr />
                    <p style={{color:"#FF7A01"}}>or let us call you </p>
                </div>
            </div>
        </div>


    </>
}
export default Blog;