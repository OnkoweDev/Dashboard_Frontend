import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Collaborate.css";

const Collaborate = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Collaborate</div>
        </div>
      </main>
    </>
  );
};

export default Collaborate;
