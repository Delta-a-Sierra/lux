import React, { useState } from "react";
import { IoPersonCircle, IoLocationSharp } from "react-icons/io5";
import Tab from "./tab";

const ProfileHeader = () => {
  const [tabStates, setTabStates] = useState({
    post: true,
    about: false,
    following: false,
    follower: false,
  });

  return (
    <div className="bg-gray-100 shadow-md rounded-md border-t-8 border-primary pt-8">
      <div className="flex justify-center items-center gap-4">
        <IoPersonCircle color="#084887" size="4em" />
        <div>
          <h1 className="text-primary font-bold text-xl">Dwayne Sutherland</h1>
          <div className="flex items-center gap-2 mb-2 xl:mb-4">
            <IoLocationSharp color="#F58A07" size="1.5em" />
            <p className="text-accent text-xl ">London</p>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-8 sm:gap-x-4 flex justify-evenly sm:justify-center">
        <Tab title="Posts" active={tabStates.post} />
        {/* <Tab title="About" active={tabStates.about} /> */}
        <Tab title="Following" active={tabStates.following} />
        <Tab title="Followers" active={tabStates.false} />
      </div>
    </div>
  );
};

export default ProfileHeader;
