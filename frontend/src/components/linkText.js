import React from "react";

//TODO add link animation

const LinkText = ({ text, center, textSize }) => {
  return (
    <div>
      <p
        className={`${center && "text-center"} text-secondary tracking-wider ${
          textSize && `text-${textSize}`
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default LinkText;
