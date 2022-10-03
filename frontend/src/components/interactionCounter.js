import React from "react";

//TODO refactor to use elements for follower/following (DRY)

const InteractionCounter = () => {
  return (
    <div className="flex justify-center gap-2">
      <div>
        <h4 className="font-bold text-gray-500 tracking-wider text-center pb-2 ">
          Following
        </h4>
        <h4 className="font-light  text-xl text-gray-500 tracking-wider text-center">
          328
        </h4>
      </div>
      <div className="border-r-2 border-gray-500 border-opacity-40"></div>
      <div>
        <h4 className="font-bold text-gray-500 tracking-wider text-center pb-2">
          Followers
        </h4>
        <h4 className="font-light text-xl text-gray-500 tracking-wider text-center">
          200
        </h4>
      </div>
    </div>
  );
};

export default InteractionCounter;
