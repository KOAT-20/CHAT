import React from 'react';
import onlineIcon from '../../icons/onLine.png';
import {
  TextContainerD, ActiveContainer, ActiveItem, ImgOnline
} from './text.js'

export default function TextContainer ({ users }) {
  return (
    <TextContainerD>
      {
        users
          ? (
            <div>
              <h1>People currently chatting:</h1>
              <ActiveContainer>
                <h2>
                  {users.map(({name}) => (
                    <ActiveItem key={name}>
                      {name}
                      <ImgOnline alt="Online Icon" src={onlineIcon}/>
                    </ActiveItem>
                  ))}
                </h2>
              </ActiveContainer>
            </div>
          )
          : null
      }
    </TextContainerD>
  );
}
