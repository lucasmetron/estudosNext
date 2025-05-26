"use client";

import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";

const Like = () => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="w-full flex items-center justify-start gap-2">
      {isSelected ? (
        <IoHeart
          size={25}
          cursor={"pointer"}
          color={"red"}
          onClick={() => {
            setIsSelected(false);
          }}
        />
      ) : (
        <CiHeart
          size={25}
          cursor={"pointer"}
          color={"gray"}
          onClick={() => {
            setIsSelected(true);
          }}
        />
      )}
      <p className="text-gray-500"> {isSelected ? 1 : 0}</p>
    </div>
  );
};

export default Like;
