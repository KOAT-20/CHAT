import React from 'react';
import ReactEmoji from 'react-emoji';
import {
  MessageContainerEnd, SentTexPr10, MessageBoxBlue, MessageTextWhite,
  MessageContainerStard, MessageBoxLight, MessageTextDark, SentTextPl10
 } from './message.js';

export default function Message ({ message: { text, user }, name })  {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <MessageContainerEnd>
          <SentTexPr10>{trimmedName}</SentTexPr10>
          <MessageBoxBlue>
            <MessageTextWhite>{ReactEmoji.emojify(text)}</MessageTextWhite>
          </MessageBoxBlue>
        </MessageContainerEnd>
        )
        : (
          <MessageContainerStard>
            <MessageBoxLight>
              <MessageTextDark className="messageText colorDark">{ReactEmoji.emojify(text)}</MessageTextDark>
            </MessageBoxLight>
            <SentTextPl10 className="sentText pl-10 ">{user}</SentTextPl10>
          </MessageContainerStard>
        )
  );
}
