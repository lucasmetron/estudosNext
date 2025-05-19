import React from "react";
import BtnLogin from "./BtnLogin";

const Header = () => {
  return (
    <div className="p-5 bg-gray-900 flex  gap-5 justify-between items-center">
      <h2>NextGram</h2>

      <BtnLogin />
    </div>
  );
};

export default Header;
