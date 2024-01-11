import React, { useState } from "react";
import "./Course.css";
import Dsa from "./Course/Dsa";
import Cp from "./Course/Cp";
import Mc from "./Course/Mc";
import Dsm from "./Course/Dsm";
import Ad from "./Course/Ad";
import Ip from "./Course/Ip";
import Wd from "./Course/Wd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdArrowDropDown } from 'react-icons/md';
const Course = () => {
    const [content, setContent] = useState('Dsa')
    const handlecontent = (data) => {
        setContent(data);

    }
    useEffect(() => {
        AOS.init({duration:3000,delay:100});
        AOS.refresh();
      }, []);

    return <>
        <div className="maincoursediv">
            <div className="coursediv" data-aos="fade-up" >
                <h2 style={{ fontWeight: "bold" }}>Courses based on subjects</h2>
                <p>Learn and grow as a developer with our Result oriented pedagogy and project based learning.</p>
                <ul style={{ margin: "0 29% 0 1%" }} className="courseul">
                    <li onClick={() => handlecontent('Dsa')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconDSA.webp" alt="" />
                        <p>Data Structure & Algorithms</p>
                    </li>
                    <li onClick={() => handlecontent('Cp')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCCP.webp" alt="" />
                        <p>Competitive Programming</p>

                    </li>
                    <li onClick={() => handlecontent('Ip')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCIP.webp" alt="" />
                        <p>Interview
                            Preperation</p>
                    </li>
                    <li onClick={() => handlecontent('Wd')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCWD.webp" alt="" />
                        <p>Web
                            Development</p>

                    </li>
                    <li onClick={() => handlecontent('Ad')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCAndroid.webp" alt="" />
                        <p>Android
                            Development</p>
                    </li>
                    <li onClick={() => handlecontent('Dsm')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconCDS.webp" alt="" />
                        <p>Data Science & ML</p>

                    </li>
                    <li onClick={() => handlecontent('Mc')}>
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp" alt="" />
                        <p>Micro
                            courses</p>

                    </li>
                </ul>

 <hr style={{width:"70%"}}/>

                {content === 'Dsa' && <Dsa />}
                {content === 'Cp' && <Cp />}
                {content === 'Dsm' && <Dsm />}
                {content === 'Ip' && <Ip />}
                {content === 'Wd' && <Wd />}
                {content === 'Ad' && <Ad />}
                {content === 'Mc' && <Mc />}

                <h6 className="mt-5" style={{ fontSize: "large" }}>
                    You can also seek Career counselling and Expert assistance in choosing your course or mode of study
                </h6>
                <button type="button" class="btn btn-danger" id="carbuton">Get Career advice</button>

                <div className="expdiv">
                    <h4 className="pt-3 ml-5 ">
                        You can also explore our Courses basis the mode of study
                    </h4>
                    <a href="https://cb3img.s3.ap-south-1.amazonaws.com/img/Lightning.webp">Check now <MdArrowDropDown /></a>
                </div>
            </div>




        </div>

    </>
}
export default Course;