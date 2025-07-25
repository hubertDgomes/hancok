import React from "react";
import Container from "../Container";
import Images from "../Images";
import fb from "/src/assets/facebook.png";
import ld from "/src/assets/linkedin.png";
import tw from "/src/assets/twitter.png";
import ig from "/src/assets/instagram.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 1300,
    arrows: false,
  };
  return (
    <div>
      <div className="bg-[url(/src/assets/banner1.png)] bg-center bg-cover bg-no-repeat py-[100px]">
        <Container>
          <Slider {...settings}>
            <div>
              <div className="w-[611px] text-white font-Oswald">
                <p className="text-[27px] mb-[30px]">LIFE TIME</p>
                <p className="font-semibold text-[60px] mb-[30px]">
                  GAMING EXPERIENCE
                </p>
                <p className="text-[16px] mb-[50px] mr-[94px] leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae alias voluptas optio. Veritatis recusandae
                  pariatur qui dignissimos dolore similique ad adipisci eum.
                  Quos aliquid fugiat magni illum eius?
                </p>

                <button className="py-[10px] px-[20px] bg-white text-black flex items-center">
                  View More{" "}
                  <MdKeyboardDoubleArrowRight className="mt-[3px] text-[25px]" />{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="w-[611px] text-white font-Oswald">
                <p className="text-[27px] mb-[30px]">LIFE TIME</p>
                <p className="font-semibold text-[60px] mb-[30px]">
                  GAMING EXPERIENCE
                </p>
                <p className="text-[16px] mb-[50px] mr-[94px] leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae alias voluptas optio. Veritatis recusandae
                  pariatur qui dignissimos dolore similique ad adipisci eum.
                  Quos aliquid fugiat magni illum eius?
                </p>

                <button className="py-[10px] px-[20px] bg-white text-black flex items-center">
                  View More{" "}
                  <MdKeyboardDoubleArrowRight className="mt-[3px] text-[25px]" />{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="w-[611px] text-white font-Oswald">
                <p className="text-[27px] mb-[30px]">LIFE TIME</p>
                <p className="font-semibold text-[60px] mb-[30px]">
                  GAMING EXPERIENCE
                </p>
                <p className="text-[16px] mb-[50px] mr-[94px] leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae alias voluptas optio. Veritatis recusandae
                  pariatur qui dignissimos dolore similique ad adipisci eum.
                  Quos aliquid fugiat magni illum eius?
                </p>

                <button className="py-[10px] px-[20px] bg-white text-black flex items-center">
                  View More{" "}
                  <MdKeyboardDoubleArrowRight className="mt-[3px] text-[25px]" />{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="w-[611px] text-white font-Oswald">
                <p className="text-[27px] mb-[30px]">LIFE TIME</p>
                <p className="font-semibold text-[60px] mb-[30px]">
                  GAMING EXPERIENCE
                </p>
                <p className="text-[16px] mb-[50px] mr-[94px] leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae alias voluptas optio. Veritatis recusandae
                  pariatur qui dignissimos dolore similique ad adipisci eum.
                  Quos aliquid fugiat magni illum eius?
                </p>

                <button className="py-[10px] px-[20px] bg-white text-black flex items-center">
                  View More{" "}
                  <MdKeyboardDoubleArrowRight className="mt-[3px] text-[25px]" />{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="w-[611px] text-white font-Oswald">
                <p className="text-[27px] mb-[30px]">LIFE TIME</p>
                <p className="font-semibold text-[60px] mb-[30px]">
                  GAMING EXPERIENCE
                </p>
                <p className="text-[16px] mb-[50px] mr-[94px] leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae alias voluptas optio. Veritatis recusandae
                  pariatur qui dignissimos dolore similique ad adipisci eum.
                  Quos aliquid fugiat magni illum eius?
                </p>

                <button className="py-[10px] px-[20px] bg-white text-black flex items-center">
                  View More{" "}
                  <MdKeyboardDoubleArrowRight className="mt-[3px] text-[25px]" />{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="w-[611px] text-white font-Oswald">
                <p className="text-[27px] mb-[30px]">LIFE TIME</p>
                <p className="font-semibold text-[60px] mb-[30px]">
                  GAMING EXPERIENCE
                </p>
                <p className="text-[16px] mb-[50px] mr-[94px] leading-[24px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae alias voluptas optio. Veritatis recusandae
                  pariatur qui dignissimos dolore similique ad adipisci eum.
                  Quos aliquid fugiat magni illum eius?
                </p>

                <button className="py-[10px] px-[20px] bg-white text-black flex items-center">
                  View More{" "}
                  <MdKeyboardDoubleArrowRight className="mt-[3px] text-[25px]" />{" "}
                </button>
              </div>
            </div>
          </Slider>
          <div className="flex gap-x-[20px] mt-[300px]">
            <Images src={fb} />
            <Images src={ld} />
            <Images src={tw} />
            <Images src={ig} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
