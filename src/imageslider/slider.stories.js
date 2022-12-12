import React from 'react';
import { storiesOf } from '@storybook/react';
// import propTypes from "prop-types";
import { Slider } from '../../dist/index';
// import './slider.css';

const stories = storiesOf ('Slideshow Test' , module);

stories.add ('Normal' , ()=> {
  const images = [ { 'url' : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' } , { 'url' : 'https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg' } , { 'url' : 'https://thumbs.dreamstime.com/b/mothers-day-flowers-yellow-gerbera-flower-stock-photo-jpg-looks-beautiful-214173760.jpg' } , { 'url' : 'https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg' } , { 'url' : 'https://www.shutterstock.com/image-photo/ferrara-italy-cobbled-alley-historic-260nw-1561842151.jpg' } ];
  return (
    <Slider
      slides={images}
    />
  );
});
stories.add ('autoplay' , ()=> {
  const images = [ { 'url' : 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' } , { 'url' : 'https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg' } , { 'url' : 'https://thumbs.dreamstime.com/b/mothers-day-flowers-yellow-gerbera-flower-stock-photo-jpg-looks-beautiful-214173760.jpg' } , { 'url' : 'https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg' } ];
  
  
  return (
    <Slider
      width= '70%'
      height= '400px'
      slides={images}
      autoPlay={true}

    />
  );
});
// import React from 'react';

// import { Slider } from '../../dist/index';

// export default {
//   title: 'Example/Slider',
//   component: Slider,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// const Template = (args) => <Slider {...args} />;

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   slides:[
//     {url:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"},
//     {url:"https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg"},
//     {url:"https://thumbs.dreamstime.com/b/mothers-day-flowers-yellow-gerbera-flower-stock-photo-jpg-looks-beautiful-214173760.jpg"},
//     {url:"https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg"}
// ]
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
// };
