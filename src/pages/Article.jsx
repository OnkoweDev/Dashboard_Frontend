import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Article.css";

const Article = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Article</div>
        </div>
      </main>
    </>
  );
};

export default Article;
