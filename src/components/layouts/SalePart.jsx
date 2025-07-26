import React from "react";
import Container from "../Container";
import Images from "../Images";
import game1 from '/src/assets/game1.png'
import game2 from '/src/assets/game2.png'
import game3 from '/src/assets/game3.png'
import game4 from '/src/assets/game4.png'
import { IoMdAddCircleOutline } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Games = ({game, gameName, offer, orgPrice, discPrice, devName})=>{
    return(
        <>
        <div className="w-[315px] relative group cursor-pointer">
            <Images src={game}/>
            <p className="text-white font-Barlow text-[22px] mb-[20px]">{gameName}</p>
            <p className="font-Oswald text-[16px] text-[#666666] mb-[20px]">{devName}</p>
            <div className="flex items-center gap-x-[10px]">
                <p className="p-2 text-white bg-[#FF4655] font-Barlow">{offer}</p>
                <del className="text-[#666666] font-Barlow text-[20px]">{orgPrice}</del>
                <p className="text-[16px] font-Oswald text-white">{discPrice}</p>
            </div>
            <IoMdAddCircleOutline className="text-white text-[30px] absolute top-2 right-2 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer" />
        </div>
        </>
    )
}

const SalePart = () => {
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
      <div className="bg-[#191919] py-[60px]">
        <Container> 
          <p className="text-white text-right font-Barlow font-semibold text-[38px] ml-[900px]">TOP GAMES ON BLACK FRIDAY SALE</p>
          <Slider {...settings}>
      <div>
        <Games
          game={game1}
          gameName={"Horizon Zero Dawn™ Complet..."}
          devName={"Guerrilla Games"}
          offer={"-40%"}
          orgPrice={"$19.99"}
          discPrice={"$7.99"}
          />
      </div>
      <div>
        <Games
          game={game2}
          gameName={"Horizon Zero Dawn™ Complet..."}
          devName={"Guerrilla Games"}
          offer={"-40%"}
          orgPrice={"$19.99"}
          discPrice={"$7.99"}
          />
      </div>
      <div>
        <Games
          game={game3}
          gameName={"Horizon Zero Dawn™ Complet..."}
          devName={"Guerrilla Games"}
          offer={"-40%"}
          orgPrice={"$19.99"}
          discPrice={"$7.99"}
          />
      </div>
      <div>
        <Games
          game={game4}
          gameName={"Horizon Zero Dawn™ Complet..."}
          devName={"Guerrilla Games"}
          offer={"-40%"}
          orgPrice={"$19.99"}
          discPrice={"$7.99"}
          />
      </div>
      <div>
        <Games
          game={game1}
          gameName={"Horizon Zero Dawn™ Complet..."}
          devName={"Guerrilla Games"}
          offer={"-40%"}
          orgPrice={"$19.99"}
          discPrice={"$7.99"}
          />
      </div>
      <div>
        <Games
          game={game2}
          gameName={"Horizon Zero Dawn™ Complet..."}
          devName={"Guerrilla Games"}
          offer={"-40%"}
          orgPrice={"$19.99"}
          discPrice={"$7.99"}
          />
      </div>
    </Slider>
        </Container>
      </div>
    </>
  );
};

export default SalePart;
