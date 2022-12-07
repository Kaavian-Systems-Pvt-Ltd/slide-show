import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import  Slider  from "../src/components/imageslider/slider";
import '../src/components/imageslider/slider.css';

const stories = storiesOf('Slideshow Test', module);

stories.add('Normal', () => {
    const images =[
        {url:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"},
        {url:"https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg"},
        {url:"https://thumbs.dreamstime.com/b/mothers-day-flowers-yellow-gerbera-flower-stock-photo-jpg-looks-beautiful-214173760.jpg"},
        {url:"https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg"},
        {url:"https://www.shutterstock.com/image-photo/ferrara-italy-cobbled-alley-historic-260nw-1561842151.jpg"}
    ];
    return (<Slider
        slides={images}
        />);
});
stories.add('autoplay', () => {
    const images =[
        {url:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"},
        {url:"https://thumbs.dreamstime.com/b/yellow-orange-starburst-flower-nature-jpg-192959431.jpg"},
        {url:"https://thumbs.dreamstime.com/b/mothers-day-flowers-yellow-gerbera-flower-stock-photo-jpg-looks-beautiful-214173760.jpg"},
        {url:"https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg"}
    ];
    const [width,setWidth] = useState('40%');
    const [height,setheight] = useState('400px');
    const [ap,setap] = useState(true);
    const [sb,setsb] = useState(true);
    const [ts,setts] = useState(2000);
    return (<Slider
        width={width}
        height={height} 
        slides={images}
        autoPlay={ap}
        showBullets={sb} 
        transitionSpeed={ts}
        />);
})
