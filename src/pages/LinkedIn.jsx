import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/LinkedIn.css";

const LinkedIn = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">LinkedIn</div>
        </div>
      </main>
    </>
  );
};

export default LinkedIn;
