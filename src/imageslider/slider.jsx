import React , { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dot } from './dot';
import { AiOutlineArrowLeft , AiOutlineArrowRight } from 'react-icons/ai';

import './slider.css';

/**
 *
 * @param {Object} props
 * @param {Array.<{url: String, caption: String}>} props.slides
 * @param {String} props.width width of slider in percentage
 * @param {String} props.height height of the slider in pixels
 * @param {Boolean} props.autoPlay if it false we have to move slide by arrows
 * @param {Boolean} props.showBullets it shows which imsge is active
 * @param {Boolean} props.showArrow used to move a slide if autoPlay is stop
 * @param {Number} props.transitionSpeed In milliSeconds
 * @returns slideshow
 *
 */

export const Slider = (props)=> {
  const [ activeIndex , setActiveIndex ] = useState (0);
  const length = props.slides.length;
  useEffect (()=> {
    if (!props.slides) return null;

    props.autoPlay
      && setTimeout (()=> {
        activeIndex === length - 1
          ? setActiveIndex (0)
          : setActiveIndex (activeIndex + 1);
      } , props.transitionSpeed);
  });
  const prevSlide = ()=> {
    activeIndex === 0
      ? setActiveIndex (length - 1)
      : setActiveIndex (activeIndex - 1);
  };
  const nextSlide = ()=> {
    activeIndex === length - 1
      ? setActiveIndex (0)
      : setActiveIndex (activeIndex + 1);
  };

  const setSize = {
    'width' : props.width ,
    'height' : props.height
  };

  return (
    <div className='slider-container' style={setSize}>
      {props.showArrow
      && <><AiOutlineArrowLeft className='arrow-prev' onClick={prevSlide} /><AiOutlineArrowRight className='arrow-next' onClick={nextSlide} /></> }
      {props.slides.map ((slide , index)=> {
        return (
          <div
            className={index === activeIndex ? 'slide current' : 'slide'}
            key={index}
          >
            {index === activeIndex && (
              <>
                <img src={slide.url} alt='slide' />
              </>
            )}
          </div>
        );
      })}

      {props.showBullets && (
        <Dot
          activeIndex={activeIndex}
          onclick={(activeIndex)=> setActiveIndex (activeIndex)}
          sliderimages={props.slides}
        />
      )}
    </div>
  );
};
Slider.propTypes = {
  'slides' : PropTypes.array ,
  'autoPlay' : PropTypes.bool ,
  'transitionSpeed' : PropTypes.number ,
  'width' : PropTypes.string ,
  'height' : PropTypes.string ,
  'showBullets' : PropTypes.bool ,
  'showArrow' : PropTypes.bool
};

Slider.defaultProps = {
  'autoPlay' : true ,
  'transitionSpeed' : 3000 ,
  'width' : '50%' ,
  'height' : '50vh' ,
  'showBullets' : true ,
  'showArrow' : true
};
