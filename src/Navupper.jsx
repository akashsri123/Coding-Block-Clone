import React from "react";
import "./Navupper.css";
const Navupper = () => {
    return <>
        <div className="navupdiv">
            <div className="mnavupdiv pt-2 pb-2">
                <div>
                    <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp" alt="" />

                    <ul className="mt-4">
                        <li className="">
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconLearn.webp" alt="" />
                            <p>Learn</p>
                        </li>
                        <li className="">
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconMonitor.webp" alt="" />
                            <p>
                                Practice
                            </p>
                        </li>
                        <li>
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconHire.webp" alt="" />
                            <p>Get Hired</p>
                        </li>
                        <li>
                            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconIDE.webp" alt="" />
                            <p>IDE</p>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-danger ">Login / Signup</button>
                </div>
            </div>
        </div>
    </>
}
export default Navupper;



