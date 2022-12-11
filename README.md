# Slide-Show

## Usage

###  import {Slider} from '@kaavian-sys/slide-show'

#### const images=[
####		 {url:"image-path"},
#### 		 {url:"image-path"}
#### ];

#### const App () = {
####   return(  
####      <div>  
####        <Slider 
####           slides={images},
####           width={'70%'},
####           height={'400px'},
####           showBullets={true} /> 
####      </div>
#### )};

| Name | Type | Required | Description | Default |
| ---  | ---  | -------- | ----------- | ------- | 
| slides | Array | required | Input should be Array of object|         |
| width | String px or % | optional | Image Slider width | '70%' |
| height | String px | optional | Image Slider height | '400px' |
| autoPlay | Boolean | optional | Slide-show type | true |
| showBullets | Boolean | optional | it shows currently active index | false |
| showArrows | Boolean | optional | it helps to move slides | false |
| transitionSpeed | Boolean | optional | to change the transition speed of a slide | 1000 |
