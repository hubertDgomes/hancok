import React, { useState } from "react";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Container from "../Container";
import earth from "/src/assets/globe.png";
import sign from "/src/assets/sign-out-alt.png";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [show , setShow] = useState(false)
  const showHandler = ()=>{
    setShow(!show)
  }

return (
    <div className="bg-black py-[40px]">
        <Container>
            <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-x-[50px]">
                    <Images className={"ml-2 lg:ml-0"} src={logo} />
                    <ul className="sm:gap-x-[35px] gap-x-[10px] text-[11px] lg:text-[16px] text-white font-Oswald hidden sm:block sm:flex">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About us</li>
                        <li className="cursor-pointer">Tornament</li>
                        <li className="cursor-pointer">Store</li>
                        <li className="cursor-pointer">Team</li>
                        <li className="cursor-pointer">FAQ</li>
                        <li className="cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                <div className="items-center text-white font-Oswald justify-between ml-20 gap-x-[6px] hidden sm:block sm:flex">
                    <Images src={earth} />
                    <div className="flex items-center mb-[6px]">
                        <Images className={"w-[18px]"} src={sign} />
                        <p className="text-[16px]">Sign In</p>
                    </div>
                    <div className="">
                        <IoSearchSharp className="" />
                    </div>
                </div>

                <button onClick={showHandler}>
                    <RiMenu3Fill className="text-white text-[30px] mr-[10px] cursor-pointer block sm:hidden" />
                </button>
            </div>
            {show &&
                <div className="text-right absolute top-5 right-9 bg-white text-black p-3.5 text-[10px] block sm:hidden">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Tornament</li>
                        <li>Store</li>
                        <li>Team</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    <Images src={earth} />
                    <div className="flex items-center mb-[6px]">
                        <Images className={"w-[18px]"} src={sign} />
                        <p className="text-[16px]">Sign In</p>
                    </div>
                    <div className="">
                        <IoSearchSharp className="flex items-end" />
                    </div>
                </div>
            }
        </Container>
    </div>
);
};

export default Header;
