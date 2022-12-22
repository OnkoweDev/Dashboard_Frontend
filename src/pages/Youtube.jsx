import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Youtube.css";

const Youtube = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">YouTube</div>
        </div>
      </main>
    </>
  );
};

export default Youtube;
