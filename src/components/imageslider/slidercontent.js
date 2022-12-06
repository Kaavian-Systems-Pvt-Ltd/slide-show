import React from "react";
import './slider.css';

function SliderContent({activeIndex,slide,divheight}){
    console.log(divheight);
    return(
        <div
      className="slide-list"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slide.map((el, index) => (
                <div className="slide">
               {/* <div key={index} className={activeIndex === index? 'slide active': 'inactive'}> */}
                    <img src={el.url} alt = {index} className="slide-image" max-height={divheight}/>
                 </div>
               )
            )}
        </div>  
    );
}

export default SliderContent;