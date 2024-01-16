import React from "react";
import { CCarouselItem, CCarousel,CImage} from '@coreui/react'
import "./Carousel.css";
const Carousel1=()=>{
    return <>
    <div className="caroudiv" >
        <div className="mcaroudiv">
        <CCarousel controls transition="crossfade" indicators   >
  <CCarouselItem>
    <CImage className="d-block w-100" src={"https://cb3img.s3.ap-south-1.amazonaws.com/img/code+skiller+banner+(2).webp"} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={"https://cb3img.s3.ap-south-1.amazonaws.com/img/live-courses-banner-min.webp"} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={"https://cb3img.s3.ap-south-1.amazonaws.com/img/cast-banner-02+(1).webp"} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
        </div>
    </div>
    </>
}
export default Carousel1;