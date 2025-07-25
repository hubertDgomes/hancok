import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import fb from "/src/assets/facebook.png";
import ld from "/src/assets/linkedin.png";
import tw from "/src/assets/twitter.png";
import ig from "/src/assets/instagram.png";
import left from '/src/assets/footer-right.png'
const Footer = () => {
  return (
    <>
      <div className="bg-[#191919] py-[30px]">
        <Container>
          <div className="bg-[#FF4655] py-[15px] md:py-[30px] px-[15px] md:px-[20px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="uppercase font-Barlow font-semibold text-[24px] md:text-[40px] text-white md:w-[720px] text-center md:text-left">
              subscribe us to get latest news in your inbox from hancok
              community
            </p>
            <div className="flex relative w-full md:w-auto">
              <input
                className="w-full md:w-auto pl-[20px] h-[50px] pr-[120px] md:pr-[300px] bg-white rounded-[50px] placeholder:text-black focus:outline-0 font-Barlow"
                placeholder="YOUR EMAIL"
              />
              <button className="bg-black h-[50px] px-[20px] text-white rounded-[50px] absolute right-0">
                SUBSCRIBE
              </button>
            </div>
          </div>


          <div className="flex mt-[20px] font-Oswald justify-between">
            <div className="w-[450px]">
              <Images src={logo} />
              <p className="text-[#666666] mr-[67px] mt-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                vero officiis rem consectetur sunt cupiditate eius obcaecati,
                culpa, aspernatur aperiam id.
              </p>
              <div className="flex gap-x-[20px] mt-[70px]">
            <Images src={fb} />
            <Images src={ld} />
            <Images src={tw} />
            <Images src={ig} />
          </div>
            </div>

            <div className="">
              <h3 className="text-white font-Barlow font-semibold text-[25px]">Links</h3>
              <ul className="text-[#666666] space-y-[30px]">
                <li>Home</li>
                <li>About</li>
                <li>Tournament</li>
                <li>Contact</li>
              </ul>
            </div>


            <div className="">
              <h3 className="text-white font-Barlow font-semibold text-[25px]">Teams</h3>
              <ul className="text-[#666666] space-y-[30px]">
                <li>Paladins</li>
                <li>CS:GO</li>
                <li>Dota2</li>
                <li>Valorant</li>
              </ul>
            </div>


            <div className="">
              <h3 className="text-white font-Barlow font-semibold text-[25px]">Gallery</h3>
              <Images src={left}/>
            </div>


          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
