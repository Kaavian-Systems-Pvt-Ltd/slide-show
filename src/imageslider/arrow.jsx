import React from 'react';
import propTypes from 'prop-types';
import { IoIosArrowForward , IoIosArrowBack } from 'react-icons/io';

export const Arrows = ({ prevSlide , nextSlide })=> {
    return (
        <div className='arrows'>
            <span className='prevslide' onClick={prevSlide}><IoIosArrowBack /></span>
            <span className='nextslide' onClick={nextSlide}><IoIosArrowForward /></span>
        </div>
    );
};

Arrows.propTypes = {
    'prevSlide' : propTypes.number.isRequired ,
    'nextSlide' : propTypes.array.isRequired
};