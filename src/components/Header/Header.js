import React from "react";
import MenuSection from "./MenuSection";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";

const Header = () => {
  return (
    <div className="flex justify-between">
      <MenuSection />
      <SearchSection />
      <ProfileSection />
    </div>
  );
};

export default Header;
