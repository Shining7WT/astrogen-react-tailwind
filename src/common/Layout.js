import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ walletConnected = false, children }) => {
  return (
    <div className="bg-background">
      <Navbar walletConnected={walletConnected} />
      <section role="main" className="mt-6">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
