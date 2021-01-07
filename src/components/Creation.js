import React, { useState } from 'react';
import CarouselData from "../data/CarouselData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Creation() {
    var settings = {
      dots: false,
      infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
  };
    const [carslData, setCarslData] = useState(CarouselData);
    return (
        <>
        <div className="creation">
            <h2 className="heading">Our Creation Process</h2>
            <div>
            <span>Our Studio</span>
            <i className="fa fa-arrows" aria-hidden="true"></i>
                <span>Your home</span>
            </div>
            </div>
             <Slider {...settings}>
            {carslData.map((carslItem) => {
                const { id, image, heading, desc } = carslItem;
                return(
                    <div key={id}>
                        <div className="creation-carousel">
                            <img src={image} alt="creation"/>
                            <div className="info">
                              <h3 className="heading-2">{heading}</h3>
                              <p>{ desc}</p>
                            </div>
                        </div>
                    </div>	
                )
            })}
            </Slider>
            <div className="underline-2"></div>
            </>
    )
}

export default Creation
