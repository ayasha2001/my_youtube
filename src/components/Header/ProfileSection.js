import React from "react";
import CamIc from "../../assets/icons/CamIc";
import ProfileIc from "../../assets/icons/ProfileIc";
import NotifictaionIc from "../../assets/icons/NotifictaionIc";

const ProfileSection = () => {
  return (
    <div className="flex my-2 mx-4 items-center justify-center">
      <CamIc />
      <NotifictaionIc/>
      <ProfileIc />
    </div>
  );
};

export default ProfileSection;
