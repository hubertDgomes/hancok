import React from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "../Images";
import live1 from "/src/assets/tour-content2.png";
import "../../App.css";
import team1 from '/src/assets/team1.png'
import team2 from '/src/assets/team2.png'
import team3 from '/src/assets/team3.png'
import team4 from '/src/assets/team4.png'





const Streaming = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="bg-black py-[30px]">
      <Container className={"sm:py-[50px] py-[20px]"}>
        <p className="font-Oswald font-semibold text-[25px] mb-[20px] sm:mb-0 sm:text-[38px] text-center sm:text-left text-white sm:mr-[806px]">
          LIVE STREAMIN VIDEO BY HANCOK
        </p>

        <div className="slider-container">
          <Slider {...settings} className="">
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

        <div className="">
          <p className="text-center font-Barlow font-medium text-[25px] text-white mt-[20px]">PREVIOUS MATCHES</p>
          <div className="">
            <div className="flex justify-evenly items-center flex-col sm:flex-row">
              <Images src={team1}/>
              <p className="font-Oswald text-[40px] font-medium text-white">9:12</p>
              <Images src={team2}/>
            </div>
            <div className="block sm:hidden text-white text-center py-1.5 text-[40px] font-Oswald mt-[40px]">
              And
            </div>
            <div className="flex justify-evenly items-center mt-[60px] flex-col sm:flex-row">
              <Images src={team3}/>
              <p className="font-Oswald text-[40px] font-medium text-white">17:8</p>
              <Images src={team4}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Streaming;
