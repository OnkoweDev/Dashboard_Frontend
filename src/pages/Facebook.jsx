import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Facebook.css";

const Facebook = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Facebook</div>
        </div>
      </main>
    </>
  );
};

export default Facebook;
