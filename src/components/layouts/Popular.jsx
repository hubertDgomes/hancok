import React from "react";
import Container from "../Container";
import Images from "../Images";
import valo from "/src/assets/violant.png";
import witch from "/src/assets/witcher.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-[4px] bottom-[40px] transform -translate-y-1/2 z-10 w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3a3a3a]"
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-sm" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute right-[5px] bottom-0 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3a3a3a]"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-sm" />
    </div>
  );
}

const Popular = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="bg-[#191919] py-[40px]">
        <Container className={"relative"}>
          <p className="text-white font-Barlow font-semibold text-[25px] mb-[10px] sm:mb-0 sm:text-[38px] sm:text-right sm:ml-[900px] text-center">
            POPULAR GAMES AROUND THE WORLD
          </p>

          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="">
                  <Images src={valo} />
                </div>
              </div>
              <div>
                <div className="">
                  <Images src={witch} />
                </div>
              </div>
              <div>
                <div className="">
                  <Images src={valo} />
                </div>
              </div>

              <div>
                <div className="">
                  <Images src={witch} />
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Popular;
