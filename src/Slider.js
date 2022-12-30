import { useState } from "react";
import dataSlides from "./dataSlides";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Slider() {
    const [slide, setSlide] = useState(0);
    const { title, text, img } = dataSlides[slide];

    const showPrevSlide = () => {
        setSlide(slide => {
            slide--;
            if (slide < 0) {
                slide = dataSlides.length - 1;
            }
            return slide;
        })
    }

    const showNextSlide = () => {
        setSlide(slide => {
            slide++;
            if (slide > dataSlides.length - 1) {
                slide = 0;
            }
            return slide;
            }
        )
    }

    return  (
        <>
            <div className="img-container">
                <div className="prev" onClick={ showPrevSlide }>
                    <SlArrowLeft />
                </div>
                <img className="slider-img" src={ img } alt="Chocolate" />
                <div className="next" onClick={ showNextSlide }>
                    <SlArrowRight />
                </div>
            </div>
            <div className="descr-container">
                <h3>{ title }</h3>
                <p>{ text }</p>
            </div>
        </>
    );
}
export default Slider;