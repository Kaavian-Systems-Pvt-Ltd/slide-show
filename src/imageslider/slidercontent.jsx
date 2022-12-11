import React from "react";
import './slider.css';

function SliderContent({activeIndex,slide}){
    return(
        <div
      className="slide-list"
      style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {slide.map((el, index) => (
                <div className="slide">
                    <img src={el.url} alt = {index} className="slide-image"/>
                 </div>
               )
            )}
        </div>  
    );
}

export default SliderContent;