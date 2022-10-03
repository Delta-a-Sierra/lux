import React from "react";
import { IoPersonCircle } from "react-icons/io5";

const PostUser = () => {
  return (
    <div className="flex gap-2 item-center ">
      <IoPersonCircle color="#084887" size="2.5em" />
      <div>
        <h3 className="font-bold text-primary">John Doe</h3>
        <p className="text-sm font-light text-secondary">
          Posted 2 minutes ago
        </p>
      </div>
    </div>
  );
};

export default PostUser;
