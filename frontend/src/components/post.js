import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import PostUser from "./postUser";
import { Comment } from "../components";

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(23);
  const [displayComments, setDisplayComments] = useState(false);

  const ToggleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };

  const ToggleComments = () => {
    setDisplayComments((prev) => !prev);
  };

  return (
    <div className="shadow-md bg-gray-100 rounded-md">
      <div className="p-2 px-4">
        <PostUser />
        <p className="text-gray-500 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          odit ut ex iusto animi officiis atque dolorem doloremque veniam minima
          eos at, recusandae sequi, nemo esse consectetur vitae, velit
          molestias?
        </p>
      </div>
      <div className=" flex gap-4 border-t-2 border-secondary border-opacity-50 px-4 py-2">
        <div className="flex items-center" onClick={ToggleLike}>
          {liked ? (
            <AiFillHeart color="#F58A07" size="1.5em" />
          ) : (
            <AiOutlineHeart color="#F58A07" size="1.5em" />
          )}
          <p>{likes}</p>
        </div>
        <div className="flex items-center" onClick={ToggleComments}>
          <FaRegComment color="#F58A07" size="1.2em" />
          <p>5</p>
        </div>
      </div>
      {displayComments && <Comment />}
    </div>
  );
};

export default Post;
