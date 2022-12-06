import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function Arrows({prevSlide, nextSlide}){
    return (
        <div className='arrows'>
            <span className='prevslide' onClick={prevSlide}><IoIosArrowBack /></span>
            <span className='nextslide' onClick={nextSlide}><IoIosArrowForward /></span>
        </div>
    )
}

export default Arrows;