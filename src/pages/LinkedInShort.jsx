import React from "react";
import "./styles/LinkedInShort.css";
import { SideNav, TopNav } from "../components";

const LinkedInShort = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">LinkedIn Short</div>
        </div>
      </main>
    </>
  );
};

export default LinkedInShort;
