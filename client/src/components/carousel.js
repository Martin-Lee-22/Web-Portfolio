import "../styles/carousel.css";
import {React, useState} from "react";

export default function Carousel(props) {
    const [currentSlide, setCurrentSlide] = useState(0)
    function nextSlide(){
        setCurrentSlide(currentSlide === props.slides.length - 1 ? 0 : currentSlide + 1)
    }
    function previousSlide(){
        setCurrentSlide(currentSlide === 0 ? props.slides.length - 1 : currentSlide - 1)
    }
  return (
    <div id="carousel_container">
        <img src="images/left_arrow.png" alt="Image of left arrow" className="arrow left_arrow" onClick={previousSlide}/>
        {props.slides.map((slide, index) => {
            return(
                <img src={slide['src']} alt={slide['alt']} key={index} className={currentSlide === index ? "slide" : "slide_hide"}/>
            )
        })}
         <img src="images/right_arrow.png" alt="Image of right arrow" className="arrow right_arrow" onClick={nextSlide}/>
         <div className="indicator_wrapper">
            {props.slides.map((_, i) => {
                return(
                    <span 
                        className={currentSlide === i ? "indicator active_indicator" : "indicator"}
                        key={i}
                        onClick={()=>{setCurrentSlide(i)}}/>
                )
            })}
         </div>
    </div>
  );
}
