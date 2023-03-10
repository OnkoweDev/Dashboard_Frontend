import React from "react";
import logo from "../assets/Logo.png";
import profile from "../assets/dummyprofile.png";
import ebook from "../assets/ebookIcon.png";
import blog1 from "../assets/article.png";
import blog3 from "../assets/blog-writer.png";
import blog2 from "../assets/blog-section.png";
import content from "../assets/content.png";
import articleBlog from "../assets/article-blog.png";
import paragraph from "../assets/paragraph.png";
import tweet from "../assets/tweet.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import product from "../assets/product.png";
import youtube from "../assets/youtube.png";
import { Link, NavLink } from "react-router-dom";

import german from "../assets/german.png";
import france from "../assets/france.png";
import italy from "../assets/italy.png";
import japan from "../assets/japan.png";
import portugal from "../assets/portugal.png";
import russia from "../assets/russia.png";
import spain from "../assets/spain.png";
import usa from "../assets/usa.png";
import china from "../assets/china.png";

import "./styles/TopNav.css";

import { BiHomeAlt, BiBell, BiLogOut } from "react-icons/bi";

import { ProfileRow } from "../components";

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
                  link="/blog-intro-generator"
                  displayImage={blog1}
                  text="Blog Intro Generation"
                />
                <NewProjectLinks
                  link="/blog-section-generator"
                  displayImage={blog2}
                  text="Blog Section Generation"
                />
                <NewProjectLinks
                  link="/blog-article-writer"
                  displayImage={blog3}
                  text="Blog Article Writer"
                />
                <NewProjectLinks
                  link="/content-rephraser"
                  displayImage={content}
                  text="Content Rephraser"
                />
                <NewProjectLinks
                  link="/article-blog-conclusion"
                  displayImage={articleBlog}
                  text="Article/Blog Conclusion"
                />
                <NewProjectLinks
                  link="/paragraph-writer"
                  displayImage={paragraph}
                  text="Paragraph Writer"
                />
                <NewProjectLinks
                  link="/short-LinkedIn-posts"
                  displayImage={linkedin}
                  text="Short LinkedIn Posts"
                />
                <NewProjectLinks
                  link="/tweets-generation"
                  displayImage={tweet}
                  text="Tweets Generation"
                />
                <NewProjectLinks
                  link="/youtube-intro-generator"
                  displayImage={youtube}
                  text="Youtube Intro Generator"
                />
                <NewProjectLinks
                  link="/instagram"
                  displayImage={instagram}
                  text="Instagram Captions Generator"
                />
                <NewProjectLinks
                  link="/product"
                  displayImage={product}
                  text="Products description"
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
                <Link
                  to="/pdf-download"
                  className="dropdown-link dropdown-btn-link"
                >
                  Pdf
                </Link>
                <Link
                  to="/MSword-download"
                  className="dropdown-link dropdown-btn-link"
                >
                  ms word
                </Link>
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
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={german} alt="german" />
                  <p>German</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={russia} alt="russia" />
                  <p>Russia</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={spain} alt="german" />
                  <p>Spain</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={portugal} alt="german" />
                  <p>Portuguese</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={italy} alt="german" />
                  <p>Italian</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={japan} alt="german" />
                  <p>Japanese</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={china} alt="german" />
                  <p>Chinese</p>
                </button>
                <button
                  href=""
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  className="dropdown-link dropdown-btn-link"
                >
                  <img src={spain} alt="german" />
                  <p>Spanish</p>
                </button>
              </div>
            </li>
            <li className="nav-link">
              <NavLink to="/collaborate" className="navLink">
                Collaborate
              </NavLink>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="profile drop-btn">
          <img src={profile} alt="" style={{ width: "100%" }} />
          <div className="drop-content">
            <div className="dropdown-link dropdown-btn-link">
              <section className="top">
                <aside className="profile__img">
                  <img src={profile} alt="" />
                </aside>
                <aside className="profile__details">
                  <h3>Kendal Matthews</h3>
                  <small>kendalmatt@gmail.com</small>
                </aside>
              </section>
              <hr style={{ margin: "25px 0" }} />
              <section className="botttom">
                <ProfileRow
                  Icon={BiHomeAlt}
                  title={"Profile"}
                  link="/profile"
                  text={"Personal information"}
                />
                <ProfileRow
                  Icon={BiBell}
                  title={"Notifications"}
                  link="/notification"
                  text={"Something new"}
                />
                <ProfileRow
                  Icon={BiHomeAlt}
                  title={"Prefrences"}
                  link="/preference"
                  text={"Manage your prefrences"}
                />
                <ProfileRow
                  Icon={BiHomeAlt}
                  title={"Password"}
                  link="/password"
                  text={"Change password"}
                />
                <ProfileRow Icon={BiLogOut} title={"Log Out"} link="/" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
