import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/GoogleAdDesc.css";

const GoogleAdDesc = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Google Ad Description</div>
        </div>
      </main>
    </>
  );
};

export default GoogleAdDesc;
