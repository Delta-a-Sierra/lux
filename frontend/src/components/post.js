import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import PostUser from "./postUser";
import { Comment } from "../components";

const Post = () => {
  //TODO change icons for comment/like to gray when not active

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
    <div>
      <div className="shadow-md bg-gray-100 rounded-md">
        <div className="p-2 px-4">
          <PostUser />
          <p className="text-gray-500 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            odit ut ex iusto animi officiis atque dolorem doloremque veniam
            minima eos at, recusandae sequi, nemo esse consectetur vitae, velit
            molestias?
          </p>
        </div>
        <div className=" flex gap-4 border-t-2 border-secondary border-opacity-50 px-4 py-2 max-h-fit">
          <div className="flex items-center gap-1" onClick={ToggleLike}>
            {liked ? (
              <AiFillHeart color="#F58A07" size="1.5em" />
            ) : (
              <AiOutlineHeart color="#7f7f7f" size="1.5em" />
            )}
            <p className="text-gray-500">{likes}</p>
          </div>
          <div className="flex items-center gap-1" onClick={ToggleComments}>
            <FaRegComment color="#7f7f7f" size="1.2em" />
            <p className="text-gray-500">5</p>
          </div>
        </div>
        {displayComments && <Comment />}
      </div>
    </div>
  );
};

export default Post;
