import React, { useEffect } from "react";
import { IoPersonCircle } from "react-icons/io5";
import Button from "../buttons/button";
import { useMediaQuery } from "../../hooks";

const NewPost = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  useEffect(() => {
    console.log(isDesktop);
  });
  return (
    <div className=" flex justify-between items-center gap-2 shadow-md pl-2 py-1 md:px-4 md:py-4 rounded-md ">
      <IoPersonCircle color="#084887" size="2.5em" />
      <h3 className="text-secondary text-sm md:text-xl">
        Got Something To Say?
      </h3>
      <Button
        color="primary"
        text={`Post`}
        onClick={null}
        type="text"
        size={isDesktop ? "xl" : "sm"}
      />
    </div>
  );
};

export default NewPost;
