import React from "react";

const Btn = ({ children, style }) => {
  return (
    <button
      className={`w-fit bg-blue-500 text-white  px-3 py-2 rounded-md cursor-pointer ${style}`}
    >
      {children}
    </button>
  );
};

export default Btn;
