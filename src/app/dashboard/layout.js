import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>Layout do dashboard</nav>
      {children}
    </div>
  );
};

export default Layout;
