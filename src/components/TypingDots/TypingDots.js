import React from 'react'
import './TypingDots.scss'

export default function TypingDots(props) {
  return (
    <div className="typing-dots">
      <div className="wave">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
