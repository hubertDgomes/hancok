import React from "react";
import Container from "../Container";
import Images from "../Images";
import slider from '/src/assets/slide-img.png'
const ExplorePart = () => {
  return (
    <>
      <Container className={"py-[40px] px-[30px] bg-[#212121] mt-[50px]"}>
        <div className="flex justify-between">
          <div className="w-[603px]">
            <p className="font-medium text-[16px] text-[#FF4655] font-Oswald mb-[20px]">Choose Your Favourite Game</p>
            <p className="font-Barlow text-[38px] font-semibold text-white mb-[20px]">Explore hancok catalog for your next favorite game!</p>
            <p className="font-Oswald font-semibold text-[16px] text-[#666666] mb-[20px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              culpa ratione enim maiores nisi cupiditate non nesciunt officia
              labore aut? Et, vero!
            </p>
            <button className="font-Barlow text-white py-[10px] px-[20px] bg-[#121212] cursor-pointer">Browse All</button>
          </div>
          <div className="w-[426px]">
            <Images src={slider}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExplorePart;
