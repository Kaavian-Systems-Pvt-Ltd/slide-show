import React from 'react';
import propTypes from 'prop-types';

export const Dot = ({ activeIndex , onclick , sliderimages })=> {
  return (
    <div className='all-dots'>
      {sliderimages.map ((slide , index)=> (
        <span
          key={index}
          className={activeIndex === index ? 'dot active' : 'dot'}
          onClick={()=> onclick (index)}
        />
      ))}
    </div>
  );
}; 

Dot.propTypes = {
    'activeIndex' : propTypes.number.isRequired ,
    'sliderimages' : propTypes.array.isRequired ,
    'onclick' : propTypes.func.isRequired
};
