import React from 'react';
import './slider.css';
import propTypes from 'prop-types';

export const SliderContent = ({ activeIndex , slide })=> {
  return (
    <div
      className='slide-list'
      style={{ 'transform' : `translate(-${activeIndex * 100}%)` }}
    >
      {slide.map ((el , index)=> (
        <div className='slide' key={index}>
          <img src={el.url} alt={index} className='slide-image' />
          <p className='caption'>{el.caption}</p>
        </div>
      ))}
    </div>
  );
};

SliderContent.propTypes = {
    'activeIndex' : propTypes.number.isRequired ,
    'slide' : propTypes.array.isRequired
};
