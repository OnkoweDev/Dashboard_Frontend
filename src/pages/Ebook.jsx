import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Ebook.css";

const Ebook = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Ebook</div>
        </div>
      </main>
    </>
  );
};

export default Ebook;
