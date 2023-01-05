import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Phone from "../old/phone";
import What from "../old/what";

export default function Layout({ children }) {
 
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Phone />
      <What />
      <Footer/>
    </>
  );
}
