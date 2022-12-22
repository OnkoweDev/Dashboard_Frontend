import React from "react";
import logo from "../assets/dummyLogo.png";
import profile from "../assets/dummyprofile.png";
import ebook from "../assets/ebookIcon.png";
import adwords from "../assets/adwords.png";
import article from "../assets/article.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import product from "../assets/product.png";
import youtube from "../assets/youtube.png";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import "./styles/TopNav.css";

const NewProjectLinks = ({ link, displayImage, text }) => {
  return (
    <Link
      to={link}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      className="dropdown-link dropdown-btn-link"
    >
      <div className="img">
        <img
          src={displayImage}
          alt=""
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <p
        style={{
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "19px",
          letterSpacing: "0.5px",
          color: "rgba(0, 22, 51, 1)",
          textTransform: "capitalize",
        }}
      >
        {text}
      </p>
    </Link>
  );
};

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="inner-container">
        <div className="logo">
          <img src={logo} alt="" style={{ width: "100%" }} />
        </div>
        <div className="nav">
          <ul>
            <li className="drop-btn">
              New Project
              <div className="drop-content">
                <NewProjectLinks
                  link="/ebook"
                  displayImage={ebook}
                  text="Ebook Writing"
                />
                <NewProjectLinks
                  link="/article"
                  displayImage={article}
                  text="Article Writing"
                />
                <NewProjectLinks
                  link="/facebook"
                  displayImage={facebook}
                  text="Facebook Ad"
                />
                <NewProjectLinks
                  link="/instagram"
                  displayImage={instagram}
                  text="Instagram Caption"
                />
                <NewProjectLinks
                  link="/linkedInShort"
                  displayImage={linkedin}
                  text="Linkedln Short Post"
                />
                <NewProjectLinks
                  link="/linkedIn"
                  displayImage={linkedin}
                  text="Linkedin Ad"
                />
                <NewProjectLinks
                  link="/googleDesc"
                  displayImage={adwords}
                  text="Google Ad Description"
                />
                <NewProjectLinks
                  link="/youtube"
                  displayImage={youtube}
                  text="Youtube Description"
                />
                <NewProjectLinks
                  link="/product"
                  displayImage={product}
                  text="Products description"
                />
                <NewProjectLinks
                  link="/googleTitle"
                  displayImage={adwords}
                  text="Google Ad Titles"
                />
              </div>
            </li>
            <li className="drop-btn">
              Publish
              <div className="drop-content">
                <p
                  style={{
                    color: "rgba(8, 18, 43, 0.56)",
                    fontSize: "10px",
                    lineHeight: "15px",
                    letterSpacing: "1.5px",
                    fontWeight: "400",
                    textAlign: "left",
                    padding: "10px 16px",
                  }}
                >
                  convert to:
                </p>
                <button href="" className="dropdown-link dropdown-btn-link">
                  Pdf
                </button>
                <button href="" className="dropdown-link dropdown-btn-link">
                  ms word
                </button>
                <button href="" className="dropdown-link dropdown-btn-link">
                  mobi
                </button>
                <button href="" className="dropdown-link dropdown-btn-link">
                  epub
                </button>
              </div>
            </li>
            <li className="nav-link">
              <NavLink to="/draft" className="navLink">
                Draft
              </NavLink>
            </li>
            <li className="drop-btn">
              Translate
              <div className="drop-content">
                <button
                  href=""
                  style={{ textTransform: "capitalize", fontWeight: "700" }}
                  className="dropdown-link dropdown-btn-link"
                >
                  english
                </button>
                <button
                  href=""
                  style={{ textTransform: "capitalize", fontWeight: "700" }}
                  className="dropdown-link dropdown-btn-link"
                >
                  french
                </button>
                <button
                  href=""
                  style={{ textTransform: "capitalize", fontWeight: "700" }}
                  className="dropdown-link dropdown-btn-link"
                >
                  spanish
                </button>
                <button
                  href=""
                  style={{ textTransform: "capitalize", fontWeight: "700" }}
                  className="dropdown-link dropdown-btn-link"
                >
                  german
                </button>
              </div>
            </li>
            <li className="nav-link">
              <NavLink to='/collaborate' className="navLink">Collaborate</NavLink>
            </li>
          </ul>
        </div>
        <div className="profile">
          <img src={profile} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
