import React from "react";
import PostUser from "./postUser";

//TODO add animation for when comments are being loading in

const Comment = () => {
  return (
    <div className=" border-t-2 border-secondary border-opacity-50 pt-2">
      <div className="pl-4">
        <PostUser />
      </div>
      <p className="text-gray-500 my-2 px-4 pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit
        ut ex iusto animi officiis atque dolorem doloremque veniam minima eos
        at, recusandae sequi, nemo esse consectetur vitae, velit molestias?
      </p>
    </div>
  );
};

export default Comment;
