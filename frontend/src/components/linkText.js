import React from "react";

//TODO add link animation

const LinkText = ({ text, center }) => {
  return (
    <div>
      <p className={`${center && "text-center"} text-secondary tracking-wider`}>
        {text}
      </p>
    </div>
  );
};

export default LinkText;
