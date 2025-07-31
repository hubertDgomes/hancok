import React from "react";
import Container from "../Container";
import Images from "../Images";
import pro1 from "/src/assets/pro1.png";
import pro2 from "/src/assets/pro2.png";
import pro3 from "/src/assets/pro3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Itmes = ({ price, proImg, productName }) => {
  return (
    <>
      <div className="bg-[#121212] py-[30px] px-[40px] w-[315px] text-center">
        <p className="text-white font-Oswald font-medium text-[40px]">{`$${price}`}</p>
        <Images src={proImg} />
        <p className="font-Oswald font-semibold text-[25px] text-white">
          {productName}
        </p>
        <p className="text-[#FF4655] font-Oswald font-semibold text-[16px] mt-[10px]">
          Add To Cart
        </p>
      </div>
    </>
  );
};

const Accesories = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <>
      <div className="bg-[#212121] py-[40px]">
        <Container>
          <p className="font-Oswald font-semibold text-[38px] text-white w-[446px]">
            WE PROVIDE ALL GAMING ACCESORIES
          </p>
          {/* <Itmes price={"95"} proImg={pro1} productName={"Gaming Controller"} /> */}
          <Slider {...settings}>
            <div>
              <Itmes price={"95"} proImg={pro1} productName={"Gaming Controller"} />
            </div>
            <div>
              <Itmes price={"95"} proImg={pro2} productName={"Gaming Keyboard"} />
            </div>
            <div>
              <Itmes price={"95"} proImg={pro3} productName={"Gaming Monitor"} />
            </div>
            <div>
              <Itmes price={"95"} proImg={pro1} productName={"Gaming Controller"} />
            </div>
            <div>
              <Itmes price={"95"} proImg={pro2} productName={"Gaming Keyboard"} />
            </div>
            <div>
              <Itmes price={"95"} proImg={pro3} productName={"Gaming Monitor"} />
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Accesories;
