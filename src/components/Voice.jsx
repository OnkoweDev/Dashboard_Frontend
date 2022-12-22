import React, { useState } from "react";
import "./styles/Voice.css";

import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Voice = () => {
  // state
  let current = false;
  let state = false;
  const [isActive, setIsActive] = useState(current);
  const [active, setActive] = useState(state);

  return (
    <div className="voice-div">
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
          setIsActive((current = !current));
          console.log(isActive);
        }}
      >
        {isActive ? (
          <HiOutlinePencilAlt className="icon" />
        ) : (
          <HiOutlinePencilAlt className="icon" />
        )}
      </button>
      <button
        className="icon-div"
        onClick={(e) => {
          e.preventDefault();
          setActive((state = !state));
          console.log(active);
        }}
      >
        {active ? (
          <AiOutlineAudioMuted className="icon" />
        ) : (
          <AiOutlineAudio className="icon" />
        )}
      </button>
    </div>
  );
};

export default Voice;
