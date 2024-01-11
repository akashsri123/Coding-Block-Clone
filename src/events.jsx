import React from "react";
import "./events.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Events = () => {
    useEffect(() => {
        AOS.init({duration:3000,delay:100});
        AOS.refresh();
      }, []);

    return <>
        <div className="eventsdiv">
            <div className="meventsdiv">
                <div className="pt-5 mb-5" data-aos="fade-in">
                    <h1>Events and Workshops</h1>
                </div>
                <div className="row contdiv" data-aos="fade-up">
                    <div className="col-4 " >
                        <img src="https://codingblocks.com/assets/img/android-developers.jpeg" alt="" />
                    </div>
                    <div className="col-8 ">
                        <h6 className="mt-3">
                            Coding Oriented seasion
                        </h6>
                        <p>Sun, Dec 24, 12:00 PM - 2:00 PM GMT+5:30</p>
                    </div>


                </div>
            </div>
        </div>
    </>

}
export default Events;