import React from "react";
import HamburgerIc from "../../assets/icons/HamburgerIc";
import YoutubeIc from "../../assets/icons/YoutubeIc";
import SearchSection from "./SearchSection";

const MenuSection = () => {
  return (
    <div className="flex mx-4">
      <HamburgerIc />
      <YoutubeIc/>
    </div>
  );
};

export default MenuSection;
