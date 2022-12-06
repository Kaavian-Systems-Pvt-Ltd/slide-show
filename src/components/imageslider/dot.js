import React from 'react';

function Dot({activeIndex, onclick, sliderimages}){
    return(
        <div className='all-dots'>
            {sliderimages.map((slide,index)=>(
                <span
                key={index}
                className={activeIndex === index ? "dot active" : "dot"}
                onClick={() => onclick(index)}></span>
            ))}
        </div>
    )
};

export default Dot;