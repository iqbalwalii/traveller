import NavbarUser from "@/Components/User/Nav";
import React from "react";
import HeroText from "@/Components/User/TextHero";
import Slider from "@/Components/User/Slider";

export default function Home() {
  return (
    <React.Fragment>
      <NavbarUser />
      <HeroText />
      <Slider />
    </React.Fragment>
  );
}
