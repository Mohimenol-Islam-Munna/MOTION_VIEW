import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
