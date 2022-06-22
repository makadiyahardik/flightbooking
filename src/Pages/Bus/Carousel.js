import React ,{Component}from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
export default class AutoPlayMethods extends Component {
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: false,
        arrow:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className='sliders'>
    
          <Slider ref={slider => (this.slider = slider)} {...settings}>
          
            <div className='images'>
             <img src='./images/bus-image-3.jpg' alt='3'/>
            </div>
            <div className='images'>
            <img src='./images/bus-image-4.jpg' alt='3'/>
            </div>
            <div className='images'>
            <img src='./images/bus-image-5.jpg' alt='3'/>
            </div>
            <div className='images'>
            <img src='./images/bus-image-3.jpg' alt='3'/>
            </div>
            <div className='images'>
            <img src='./images/bus-image-4.jpg' alt='3'/>
            </div>
            <div className='images'>
            <img src='./images/bus-image-5.jpg' alt='3'/>
            </div>
          </Slider>
     
        </div>
      );
    }
  }