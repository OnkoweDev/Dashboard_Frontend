import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/GoogleAdTitle.css";

const GoogleAdTitile = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Google Ad Title</div>
        </div>
      </main>
    </>
  );
};

export default GoogleAdTitile;
