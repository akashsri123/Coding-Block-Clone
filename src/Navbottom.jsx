
import React, { useState } from "react";
import "./Navbottom.css";
import { MdArrowDropDown } from 'react-icons/md';
import Free from "./Navhover/Free";
import FLR from "./Navhover/FLR";
const Navbottom = () => {
    const [val,setVal]=useState('false');
    const [val2,setVal2]=useState('false');
    function callhandle() {
      setVal('true');
       
    }
    function leavehandle() {
        setVal('false');
         
      }
      function callhandle1() {
        setVal2('true');
         
      }
      function leavehandle1() {
          setVal2('false');
           
        }
    return <>
        <div className="navdiv">
            <div className="mnavdiv">
                <div>
                    <ul>
                        <li >Courses <MdArrowDropDown /></li>
                        <li onMouseEnter={callhandle} onMouseLeave={leavehandle} className="pb-3">Community and events <MdArrowDropDown /></li>
                        <li onMouseEnter={callhandle1} onMouseLeave={leavehandle1}>Free learning Resources <MdArrowDropDown /></li>
                        <li>Live Classes</li>
                    </ul>
                </div>
            </div>
          {val==='true' && <Free /> }
          {val2==='true' && <FLR /> }
        </div>
    </>

}
export default Navbottom;