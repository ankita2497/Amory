import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel_1 from "../assets/carousel_1.jpg";
import carousel_2 from "../assets/carousel_2.jpg";
import carousel_3 from "../assets/carousel_3.jpg";
import carousel_4 from "../assets/carousel_4.jpg";
import carousel_5 from "../assets/carousel_5.jpg";
import carousel_6 from "../assets/carousel_6.jpg";
import { Link } from 'react-router-dom';

function Carousel() {
  var settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
  };
  return (
      <div className="carousel-img">
            <Slider {...settings}>
              <div>
                 <img src={carousel_1} alt=""/>
              </div>
              <div>
                <img src={carousel_2} alt=""/>
              </div>
              <div>
                <img src={carousel_3} alt=""/>
              </div>
              <div>
          <img src={carousel_4} alt=""/>
      </div>
      <div>
         <img src={carousel_5} alt=""/>
      </div>
        <div>
          <img src={carousel_6} alt="" /> 
      </div>
      </Slider>
      <Link to="/shop"><button className="btn" style={{transform: "translate(73%, -183%)"}}>Shop</button></Link>
      </div>
    )
}

export default Carousel
