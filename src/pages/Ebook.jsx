import React, { useState } from "react";
import { ProjectHeader, SideNav, TopNav } from "../components";
import "./styles/Ebook.css";

import ebook from "../assets/ebookIcon.png";
import { BsThreeDots } from "react-icons/bs";

//
import { AiOutlineAudio } from "react-icons/ai";

//
import { CiPause1 } from "react-icons/ci";
import { FiStopCircle } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { RiVoiceprintFill } from "react-icons/ri";

const Ebook = () => {
  // choice of writind style i.e audio / writing
  const [isVoice, setIsVoice] = useState(false);

  // insert book title
  const insertBookTitle = () => {
    const bookTitle = document.getElementById("book-title").value;
    document.getElementById("book-title-heading").textContent = bookTitle;
  };

  // insert book content
  const insertBookContent = () => {
    const bookContent = document.getElementById("book-content-field").value;
    document.getElementById("book-content").textContent = bookContent;
  };
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div className="ebook-container inner-page-container">
              {/* header */}
              <ProjectHeader image={ebook} title="Ebook Writing" />
              {/* ebook body content */}
              <div className="body-content">
                <div className="left">
                  <input
                    type="text"
                    id="book-title"
                    placeholder="Book Title"
                    onChange={insertBookTitle}
                  />
                  <textarea
                    name=""
                    id="book-content-field"
                    className="textarea"
                    placeholder="Content"
                    onChange={insertBookContent}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <div className="right" style={{ position: "relative" }}>
                  <h2
                    id="book-title-heading"
                    style={{
                      margin: "20px 0",
                    }}
                  ></h2>
                  <div id="book-content" style={{whiteSpace: 'pre-line'}}></div>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      outline: "none",
                      position: "absolute",
                      top: "4%",
                      right: "5%",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                    id="dot-btn"
                  >
                    <ul className="drop-btn">
                      <BsThreeDots
                        className="dot-icon"
                        style={{ fontSize: "16px", fontWeight: "900" }}
                      />
                      <div className="drop-content">
                        <button className="drop_down">Download</button>
                        <button className="drop_down">Share</button>
                      </div>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
            {isVoice ? (
              <div className="voice-div">
                <button
                  className="icon-div"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <RiVoiceprintFill />
                </button>
                <button
                  className="icon-div"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <CiPause1 />
                </button>
                <button
                  className="icon-div"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <FiStopCircle />
                </button>
                <button
                  className="icon-div"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVoice(false);
                  }}
                >
                  <HiOutlinePencil />
                </button>
              </div>
            ) : (
              <div className="voice-div">
                <button
                  className="icon-div"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVoice(true);
                  }}
                >
                  <AiOutlineAudio />
                </button>
                <button
                  className="icon-div"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsVoice(false);
                  }}
                >
                  <HiOutlinePencil />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Ebook;
