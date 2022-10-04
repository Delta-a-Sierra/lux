import React from "react";

//TODO refactor to use elements for follower/following (DRY)

const InteractionCounter = () => {
  return (
    <div className="flex flex-col xl:flex-row  p-2 justify-center gap-1 xl:gap-4">
      <div>
        <h4 className="font-bold text-sm 2xl:text-lg text-gray-500 tracking-wider text-center">
          Following
        </h4>
        <h4 className="font-light  text-md text-gray-500 tracking-wider text-center">
          328
        </h4>
      </div>
      <div className=" border-t-2 xl:border-r-2 border-gray-500 border-opacity-40"></div>
      <div>
        <h4 className="font-bold text-sm 2xl:text-lg text-gray-500 tracking-wider text-center">
          Followers
        </h4>
        <h4 className="font-light text-md text-gray-500 tracking-wider text-center">
          200
        </h4>
      </div>
    </div>
  );
};

export default InteractionCounter;
