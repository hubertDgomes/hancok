import React from "react";
import Container from "../Container";
import Images from "../Images";
import player1 from "/src/assets/player1.png";
import player2 from "/src/assets/player2.png";
import player3 from "/src/assets/player3.png";
import player4 from "/src/assets/player4.png";
import social from "/src/assets/social_icon.png";
const Players = ({ player, gameName }) => {
  return (
    <>
      <div className="relative w-[650px] group cursor-pointer overflow-hidden">
        <Images className={"saturate-5 group-hover:saturate-50"} src={player} />
        <div className="bg-black/20 py-[30px] px-[20px] absolute bottom-0 w-full flex items-end justify-between translate-y-28 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="">
            <p className="font-Barlow font-semibold text-[25px] text-white">
              {gameName}
            </p>
            <p className="font-Oswald text-[16px] text-white w-[300px] opacity-0  group-hover:opacity-100 transition-all duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper
            </p>
            <button className="py-[10px] px-[20px] bg-[#FF4655] font-Oswald opacity-0  group-hover:opacity-100 transition-all duration-300">
              Know more
            </button>
          </div>

          <div className=" opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Images src={social} />
          </div>
        </div>
      </div>
    </>
  );
};

const ProTeam = () => {
  return (
    <>
      <div className="bg-[#191919] py-[50px]">
        <Container>
          <p className="text-white font-Barlow font-semibold text-[38px] text-right ml-[823px] mb-[30px]">
            MEET OUR PROFESSIONAL ELITE TEAM
          </p>
          <div className="flex flex-wrap gap-x-[20px] gap-y-[20px]">
            <Players player={player1} gameName={"Paladin"} />
            <Players player={player2} gameName={"CS:GO"} />
            <Players player={player3} gameName={"DOTA 2"} />
            <Players player={player4} gameName={"VALORANT"} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProTeam;
