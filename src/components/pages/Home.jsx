import React from "react";
import Banner from "../layouts/Banner";
import Banner2 from "../layouts/Banner2";
import Popular from "../layouts/Popular";
import Streaming from "../layouts/Streaming";
import SalePart from "../layouts/SalePart";
import Accesories from "../layouts/Accesories";
import ProTeam from "../layouts/ProTeam";
import Lenis from "lenis";


const Home = () => {
  const lenis = new Lenis()

  function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  raf()


  return (
    <>
      <Banner />
      <Banner2 />
      <Popular />
      <Streaming />
      <SalePart />
      <Accesories />
      <ProTeam />
    </>
  );
};

export default Home;
