import React from "react";
import "./Upper.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Upper = () => {
    useEffect(() => {
        AOS.init({duration:3000,delay:200});
        AOS.refresh();
      }, []);

    return <>
        <div className="upperdiv">
            <div className="mupperdiv" data-aos="fade">
                <div className="row">
                    <div className="col-3">
                        <h3>
                            Why
                        </h3>
                        <h3>Coding Blocks?</h3>
                    </div>
                    <div className="col-9" >
                        <p className="p-3 " >With time tested, result oriented pedagogy & industry aligned courses offering project based learning, our courses are your perfect investment into your career. Get the best in the industry!</p>
                    </div>
                </div>
                <div className="row mb-5 mt-4">
                    <div className="col-3 p-4 pt-0 pb-0">
                        <div className="">


                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/teacher.png" alt="" />
                            <h4>Superb mentors</h4>
                            <p>Best in class mentors from top Tech schools and Industry favourite Techies are here to teach you.</p>
                        </div>
                    </div>
                    <div className="col-3 p-4 pt-0 pb-0">
                        <div className="lining">
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/laptop.png" alt="" />
                            <h4>Industry-vetted curriculum</h4>
                            <p>Best in class content, aligned to the Tech industry is delivered to you to ensure you are a darling of the Tech industry.

                            </p>
                        </div>
                    </div>
                    <div className="col-3 p-4 pt-0 pb-0">
                        <div className="lining">
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cd-bcm.webp" alt="" />
                            <h4>
                                Project based learning
                            </h4>
                            <p>
                                Hands on learning pedagogy with live projects to cover practical knowledge over theoretical one.
                            </p>
                        </div>
                    </div>
                    <div className="col-3 p-4 pt-0 pb-0">
                        <div className="lining">
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/office-bag.png" alt="" />
                            <h4>Superb placements</h4>
                            <p>Result oriented courses with placement across all genres, students as well as Working professionals.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
export default Upper;