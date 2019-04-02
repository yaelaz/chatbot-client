import React from 'react';
import './Bubble.scss';

export default function Bubble(props) {
  return (
    <div className={props.type === 'bot' ? 'bot-msg' : 'user-msg'}>
      <p>{props.text}</p>
    </div>
  );
}
