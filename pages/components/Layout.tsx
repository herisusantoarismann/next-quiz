import React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: Props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
