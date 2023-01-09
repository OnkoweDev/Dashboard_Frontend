import React from "react";
import { SideNav, TopNav } from "../components";

const MSDownload = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content"></div>
        </div>
      </main>
    </>
  );
};

export default MSDownload;
