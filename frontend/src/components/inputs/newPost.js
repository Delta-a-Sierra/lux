import React, { useEffect } from "react";
import { IoPersonCircle } from "react-icons/io5";
import Button from "../buttons/button";
import { useMediaQuery } from "../../hooks";
import TextInput from "./textInput";

const NewPost = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  useEffect(() => {
    console.log(isDesktop);
  });
  return (
    <div className=" flex justify-between items-center bg-gray-100 dark:bg-dark-500 gap-2 shadow-md pl-2 py-3 md:px-4 md:py-4 rounded-md">
      <IoPersonCircle color="#084887" size="2.5em" />
      {/* <h3 className="text-secondary text-sm md:text-xl">
        Got Something To Say?
      </h3> */}
      <div className="flex-1">
        <TextInput placeholder="Whats on your mind?" bg="dark-500" noErrors />
      </div>
      <Button
        color="primary"
        text={`Post`}
        onClick={null}
        type="text"
        size={isDesktop ? "xl" : "sm"}
        px="4"
      />
    </div>
  );
};

export default NewPost;
