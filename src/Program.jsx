import React from "react";
import "./Program.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Program = () => {
    useEffect(() => {
        AOS.init({duration:3000,delay:200});
        AOS.refresh();
      }, []);

    return <>
        <div className="programdiv">
            <div className="mprogramdiv" data-aos="fade">
                <div className="pb-3"> 
                    <h2>Choose how you learn!</h2>
                    <p style={{fontSize:"medium"}}>Each learner has his or her own manner of learning and one
                        model of teaching is not fit for all. At Coding Blocks, we realise this and
                        therefore deliver programs in Classroom, Live interactive and Online guided learning models.</p>
                </div>
                <div>
                    <ul>
                        <li>Classroom Program</li>
                        <li>Live Interactive Program</li>
                        <li>Online Guided learning Program</li>
                    </ul>
                    <div >
                        <div className="row idiv">
                            <div className="col-3 p-0">
                                <iframe src="https://www.youtube.com/embed/eI4an8aSsgw" frameborder="0" title="abcd" className="video"></iframe>
                            </div>
                            <div className="col-9 pdiv">
                                <div className="row">
                                    <div className="col-3 p-4 pb-0 pt-2">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cd-ifc.webp" alt="" />
                                        <p>Limited Batch Size</p>
                                    </div>
                                    <div className="col-3 p-4 pb-0 pt-2 line">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cd-bcm.webp" alt="" />
                                        <p>Individual attention</p>
                                    </div>
                                    <div className="col-3 p-4 pb-0 pt-2 line">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/studentchat.svg" alt="" />
                                        <p>Awesome Peer group</p>
                                    </div>
                                    <div className="col-3 p-4 pb-0 pt-2 line">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/userrefresh.svg" alt="" />
                                        <p>Continuous feedback & monitoring</p>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-3 p-4 pt-0 pb-2">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/studentplaced.svg" alt="" />
                                        <p>In-class Hackathons & Assignment sessions</p>
                                    </div>
                                    <div className="col-3 p-4 pt-0 pb-2 line">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/chat1.svg" alt="" />
                                        <p>Dedicated Placement support</p>
                                    </div>
                                    <div className="col-3 p-4 pt-0 pb-2 line">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/breifcase.svg" alt="" />
                                        <p>Dedicated Doubt support</p>
                                    </div>
                                    <div className="col-3 p-4 pt-0 pb-2 line">
                                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cd-hlearn.webp" alt="" />
                                        <p>100% Course completion</p>
                                    </div>
                                </div>

                            </div>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Program;