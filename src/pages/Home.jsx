import React from "react";
import { SideNav, TopNav, Voice } from "../components";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            Home
            <Voice />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
