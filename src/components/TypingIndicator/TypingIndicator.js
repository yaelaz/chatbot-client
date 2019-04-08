import React from "react";
import "./TypingIndicator.scss";

//todo: consider changing to styled components
export default function TypingIndicator(props) {
  return (
    <div className="typing-indicator">
      <div className="wave">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
}
