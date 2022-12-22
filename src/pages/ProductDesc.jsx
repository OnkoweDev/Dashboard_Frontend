import React from "react";
import { SideNav, TopNav } from "../components";
import "./styles/ProductDesc.css";

const ProductDesc = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">Product Description</div>
        </div>
      </main>
    </>
  );
};

export default ProductDesc;
