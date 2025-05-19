import React from "react";

const Header = () => {
  return (
    <div className="p-5 bg-indigo-950 flex  gap-5 justify-between items-center">
      <h2>NextGram</h2>

      <button className="px-5 py-2 bg-blue-500 rounded-md cursor-pointer transition ease-in hover:bg-blue-600 ">
        Entrar
      </button>
    </div>
  );
};

export default Header;
