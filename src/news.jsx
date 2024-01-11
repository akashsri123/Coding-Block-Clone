import React from "react";
import "./news.css";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const News = () => {
    useEffect(() => {
        AOS.init({duration:3000,delay:100});
        AOS.refresh();
      }, []);

    return <>
        <div className="newsdiv">
            <div className="mnewsdiv" data-aos="fade-up">
                <div className="row newindiv">
                    <div className="col-4">
                        <h1 className="mt-4">IN THE</h1>
                        <h1>NEWS</h1>
                    </div>
                    <div className="col-4">
                        <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/pioneer-logo.webp" alt=""  />
                        <h5>Coding is a Game changer</h5>
                        <p>-Varun Kohli, Coding Blocks</p>
                        <a href="http://localhost:3000/" > Read more <FaAngleRight/></a>
                        <hr style={{visibility:"hidden"}} />
                        <h5>The Indian EXPRESS</h5>
                        <h6>Teaching Codng to School students for free</h6>
                        <a href="http://localhost:3000/" >Read more <FaAngleRight/></a>
                    </div>
                    <div className="col-4">
                        <h5>Top 50 Organisations in Education award-2019</h5>
                        <a href="http://localhost:3000/">Read more <FaAngleRight/></a>
                        <hr style={{visibility:"hidden"}} />
                        <h3>The Indian EXPRESS</h3>
                        <p>Changing the realm of Coding Education in India </p>
                        <a href="http://localhost:3000/">Read more <FaAngleRight/></a>

                    </div>
                </div>
            </div>
        </div>
    </>
};
export default News;