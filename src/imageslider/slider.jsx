import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Dot from "./dot";
import Arrows from "./arrow";
import SliderContent from './slidercontent';
import './slider.css';

export function Slider(props){
    const [activeIndex, setActiveIndex] =useState(0);
    const [arrow, setArrow] =useState(props.showArrow);
    const length = props.slides.length;
    useEffect(()=>{
        if (!props.slides) return null;
        if (props.autoPlay!==true) setArrow(true);
        else setArrow(false);
        props.autoPlay && setTimeout(()=>{
            activeIndex === length-1?
            setActiveIndex(0):
            setActiveIndex(activeIndex+1);
        },props.transitionSpeed);
    },)

    const setSize ={
        width:props.width,
        height:props.height
    }


     return (
        <div className="slider-container" style={setSize}>
            <SliderContent
            activeIndex={activeIndex}
            slide={props.slides}
            />
            {arrow && <Arrows 
        prevSlide={()=>
        activeIndex === 0 ? setActiveIndex(length-1) : setActiveIndex(activeIndex-1)}
        nextSlide={()=>
        activeIndex === length-1 ? setActiveIndex(0) : setActiveIndex(activeIndex+1)}
        />}
        {props.showBullets&&<Dot 
        activeIndex={activeIndex}
        onclick={(activeIndex)=>setActiveIndex(activeIndex)}
        sliderimages={props.slides}
        />}
        
        </div>
     );
};
Slider.propTypes = {
    slides:PropTypes.array,
    autoPlay: PropTypes.bool,
    transitionSpeed: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    showBullets: PropTypes.bool,
    showArrow: PropTypes.bool
  };
  
  Slider.defaultProps = {
    autoPlay: true,
    transitionSpeed: 3000,
    width: "50%",
    height: "400px",
    showBullets: true,
    showArrow:false
  };