import React from "react";

// import components
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
