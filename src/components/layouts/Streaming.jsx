import React from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../Images";
import live1 from "/src/assets/tour-content2.png";
import "../../App.css";
const Streaming = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="bg-black py-[30px]">
      <Container>
        <p className="font-Oswald font-semibold text-[38px] text-white mr-[806px]">
          LIVE STREAMIN VIDEO BY HANCOK
        </p>

        <div className="slider-container">
          <Slider {...settings} className="mx-[10px]">
            <div className="px-4">
              <Images src={live1} />
            </div>
            <div className="px-4">
              <Images src={live1} />
            </div>
            <div className="px-4">
              <Images src={live1} />
            </div>
            <div className="px-4">
              <Images src={live1} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Streaming;
