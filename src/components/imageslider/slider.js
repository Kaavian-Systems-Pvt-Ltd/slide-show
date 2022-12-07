import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Dot from "./dot";
import Arrows from "./arrow";
import SliderContent from './slidercontent';
import './slider.css';

export function Slider({slides,width,height,showBullets,autoPlay,transitionSpeed}){
    const [activeIndex, setActiveIndex] =useState(0);
    // const [divwidth,setWidth] =useState('90%');
    // const [divheight,setHeight]=useState('50vh');
    // const [transition,setTransition] = useState(1000);
    const length = slides.length;
    useEffect(()=>{
        // if(width) setWidth(width);
        // if(height) setHeight(height);
        // if(transitionSpeed) setTransition(transitionSpeed);
        autoPlay && setTimeout(()=>{
            activeIndex === length-1?
            setActiveIndex(0):
            setActiveIndex(activeIndex+1);
        },transitionSpeed);
    },[activeIndex,transitionSpeed])

    // const setSize ={
    //     width:divwidth,
    //     height:divheight
    // }


     return (
        <div className="slider-container" style={{width,height}}>
            <SliderContent
            activeIndex={activeIndex}
            slide={slides}
            divheight={height}
            />
            <Arrows 
        prevSlide={()=>
        activeIndex === 0 ? setActiveIndex(length-1) : setActiveIndex(activeIndex-1)}
        nextSlide={()=>
        activeIndex === length-1 ? setActiveIndex(0) : setActiveIndex(activeIndex+1)}
        />
        {showBullets&&<Dot 
        activeIndex={activeIndex}
        onclick={(activeIndex)=>setActiveIndex(activeIndex)}
        sliderimages={slides}
        />}
        
        </div>
     );
};
Slider.propTypes = {
    autoPlay: PropTypes.bool,
    transitionSpeed: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string
  };
  
  Slider.defaultProps = {
    autoPlay: false,
    transitionSpeed: 3000,
    width: "70%",
    height: "400px"
  };